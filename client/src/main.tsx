import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { store } from './app/store.ts';
import { mantineTheme } from './theme/mantine.ts';
import App from './App.tsx';

// Mantine CSS
import '@mantine/core/styles.css';

// Наши глобальные стили
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={mantineTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MantineProvider>
  </StrictMode>,
);
