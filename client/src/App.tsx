import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import './App.css';
import { TravelProHeader, UserInfoHeader } from './components/molecules';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './components/AuthProvider';
import {
  logout,
  selectAuthInitialized,
  selectAuthLoading,
} from './features/auth/authSlice';
import { logoutUser } from './features/auth/api';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import AuthContainer from './components/pages/Auth/AuthContainer';
import { LoadingSpinner } from './components/molecules';
import { selectUser } from './features/auth/authSlice';
import ActivitiesGrid from './components/organisms/ActivityCard/ActivitiesGrid';
import { AchievementsGrid } from './components/organisms/Achievement/AchievementsGrid';
import { ChatButton } from './components/atoms';
import { ChatDialog } from './components/molecules/ChatDialog/ChatDialog';
import { DashboardPage } from './components/pages/DashboardPage/DashboardPage';

function App() {
  const theme = useAppSelector((state) => state.ui.theme);
  const user = useAppSelector(selectUser);
  const isAuthInitialized = useAppSelector(selectAuthInitialized);
  const isAuthLoading = useAppSelector(selectAuthLoading);
  const dispatch = useAppDispatch();
  const [isChatOpen, setIsChatOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle white body background on dashboard
  useEffect(() => {
    if (location.pathname.startsWith('/dashboard')) {
      document.body.classList.add('dashboard-light');
    } else {
      document.body.classList.remove('dashboard-light');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!isAuthInitialized) return;
    if (!user) {
      if (location.pathname !== '/auth') navigate('/auth');
      return;
    }
    if (location.pathname === '/auth') navigate('/');
  }, [user, isAuthInitialized, location.pathname, navigate]);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (e) {
      toast.error('Ошибка выхода: ' + (e instanceof Error ? e.message : e));
    }
    dispatch(logout());
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  if (!isAuthInitialized || isAuthLoading) {
    return (
      <AuthProvider>
        <LoadingSpinner
          title="✈️ TravelPro AI"
          subtitle="Проверка авторизации..."
          animation="fade"
        />
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <div className={`App ${theme}-theme`}>
              <div>
                <DashboardPage />
              </div>
            </div>
          }
        />
        <Route
          path="/auth"
          element={
            <div className={`App ${theme}-theme`}>
              <AuthContainer />
              <ToastContainer
                position="top-right"
                autoClose={1000}
                closeButton={false}
              />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className={`App ${theme}-theme`}>
              <div className="content-wrapper">
                <TravelProHeader showLogout={true} onLogout={handleLogout} />
                <UserInfoHeader />
                <ActivitiesGrid />
                <AchievementsGrid />
              </div>
              <ChatButton onClick={handleChatToggle} />
              <ChatDialog
                opened={isChatOpen}
                onClose={() => setIsChatOpen(false)}
              />
              <ToastContainer
                position="top-right"
                autoClose={3000}
                closeButton={false}
              />
            </div>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
