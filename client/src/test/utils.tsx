import { MantineProvider } from '@mantine/core';
import { mantineTheme } from '../theme/mantine';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

export function renderWithProviders(ui: ReactElement) {
  return render(<MantineProvider theme={mantineTheme}>{ui}</MantineProvider>);
}
