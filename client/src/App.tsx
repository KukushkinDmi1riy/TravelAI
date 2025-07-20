import { useEffect } from 'react';
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
import { useNavigate, Routes, Route } from 'react-router-dom';
import AuthContainer from './components/pages/Auth/AuthContainer';
import { LoadingSpinner } from './components/molecules';
import { selectUser } from './features/auth/authSlice';

function App() {
  const theme = useAppSelector((state) => state.ui.theme);
  const user = useAppSelector(selectUser);
  const isAuthInitialized = useAppSelector(selectAuthInitialized);
  const isAuthLoading = useAppSelector(selectAuthLoading);
  const dispatch = useAppDispatch();
  // const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  useEffect(() => {
    // Только после инициализации аутентификации делаем навигацию
    if (isAuthInitialized) {
      if (user) {
        navigate('/');
      } else {
        navigate('/auth');
      }
    }
  }, [user, navigate, isAuthInitialized]);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (e) {
      toast.error('Ошибка выхода: ' + (e instanceof Error ? e.message : e));
    }
    dispatch(logout());
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
              </div>
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
