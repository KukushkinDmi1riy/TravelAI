import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, Container } from '@mantine/core';
import './App.css';
import type { RootState } from './app/store';
import { setTheme } from './features/ui/uiSlice';
import { TravelProHeader } from './components/TravelHeader/TravelProHeader';
import { MantineDemo } from './components/pages/MantineDemo/MantineDemo';
import { Dashboard } from './components/pages/Dashboard/Dashboard';

function App() {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  return (
    <div className={`App ${theme}-theme`}>
      <TravelProHeader />

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
