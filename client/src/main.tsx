import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import { store } from './app/store.ts';
import { mantineTheme } from './theme/mantine.ts';
import { BrowserRouter } from 'react-router-dom';

// Mantine CSS
import '@mantine/core/styles.css';

// Наши глобальные стили
import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={mantineTheme}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </Provider>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
);
