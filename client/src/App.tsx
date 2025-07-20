import { Container, Tabs } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import './App.css';
import { TravelProHeader } from './components/TravelHeader/TravelProHeader';
import { Dashboard } from './components/pages/Dashboard/Dashboard';
import { MantineDemo } from './components/pages/MantineDemo/MantineDemo';
import { setTheme } from './features/ui/uiSlice';
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
  const [activeTab, setActiveTab] = useState('dashboard');
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

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

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
              <TravelProHeader />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  padding: '1rem 2rem 0 0',
                }}
              >
                <button
                  onClick={handleLogout}
                  style={{
                    padding: '0.5rem 1rem',
                    background: '#e03131',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  Выйти
                </button>
              </div>
              <Container size="xl" mt="md">
                <Tabs
                  value={activeTab}
                  onChange={(value) => setActiveTab(value || 'dashboard')}
                >
                  <Tabs.List>
                    <Tabs.Tab value="dashboard">🏠 Dashboard</Tabs.Tab>
                    <Tabs.Tab value="mantine-demo">🚀 Mantine Demo</Tabs.Tab>
                    <Tabs.Tab value="theme">🎨 Theme</Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value="dashboard" pt="md">
                    <Dashboard />
                  </Tabs.Panel>

                  <Tabs.Panel value="mantine-demo" pt="md">
                    <MantineDemo />
                  </Tabs.Panel>

                  <Tabs.Panel value="theme" pt="md">
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                      <h1>TravelPro AI</h1>
                      <p>Текущая тема: {theme}</p>
                      <button onClick={handleThemeToggle}>
                        Переключить тему
                      </button>
                    </div>
                  </Tabs.Panel>
                </Tabs>
              </Container>
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
