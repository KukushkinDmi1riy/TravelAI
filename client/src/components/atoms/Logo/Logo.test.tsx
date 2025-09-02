import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../test/utils';
import { Logo } from './Logo';
import { describe, it, expect } from 'vitest';

describe('Logo', () => {
  it('renders provided icon text', () => {
    renderWithProviders(<Logo icon="✈️" />);
    expect(screen.getByText('✈️')).toBeInTheDocument();
  });
});
