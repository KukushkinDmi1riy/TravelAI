import { Container, Tabs } from '@mantine/core';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import './App.css';
import { TravelProHeader } from './components/TravelHeader/TravelProHeader';
import AuthContainer from './components/pages/Auth/AuthContainer';
import { Dashboard } from './components/pages/Dashboard/Dashboard';
import { MantineDemo } from './components/pages/MantineDemo/MantineDemo';
import { setTheme } from './features/ui/uiSlice';

function App() {
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  // Если пользователь не авторизован, показываем страницу авторизации
  if (!isAuthenticated) {
    return (
      <div className={`App ${theme}-theme`}>
        <AuthContainer onAuthSuccess={handleAuthSuccess} />
      </div>
    );
  }

  // Если пользователь авторизован, показываем основное приложение
  return (
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
          onClick={() => {
            localStorage.removeItem('isAuthenticated');
            setIsAuthenticated(false);
          }}
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
              <button onClick={handleThemeToggle}>Переключить тему</button>
            </div>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;
