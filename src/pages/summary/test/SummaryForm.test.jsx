// checkbox unchecked by default
// checking checkbox enables button

import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

// unchecking checkbox again disables button
test('initial conditions', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test('checkbox disabled button on first click and enables on second click', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();
  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});