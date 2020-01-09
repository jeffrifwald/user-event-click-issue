import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

describe('Form', () => {
  it('should be able to focus a single element twice using userEvent', async () => {
    const { getByPlaceholderText, getByText } = render(<Form />);
    const emailInput = getByPlaceholderText('Email');
    const focusEmailButton = getByText('Focus Email');

    // Focusing the same element twice causes the body to focus instead
    userEvent.click(focusEmailButton);
    expect(document.activeElement).toBe(emailInput);
    userEvent.click(focusEmailButton);
    expect(document.activeElement).toBe(emailInput);
  });

  it('should be able to focus two different elements using userEvent', async () => {
    const { getByPlaceholderText, getByText } = render(<Form />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const focusEmailButton = getByText('Focus Email');
    const focusPasswordButton = getByText('Focus Password');

    // Focusing with a different element in-between works
    userEvent.click(focusEmailButton);
    expect(document.activeElement).toBe(emailInput);
    userEvent.click(focusPasswordButton);
    expect(document.activeElement).toBe(passwordInput);
    userEvent.click(focusEmailButton);
    expect(document.activeElement).toBe(emailInput);
  });

  it('should be able to focus a single element twice using fireEvent', () => {
    const { getByPlaceholderText, getByText } = render(<Form />);
    const emailInput = getByPlaceholderText('Email');
    const focusEmailButton = getByText('Focus Email');

    // Focusing the same element twice works using fireEvent
    fireEvent.click(focusEmailButton);
    expect(document.activeElement).toBe(emailInput);
    fireEvent.click(focusEmailButton);
    expect(document.activeElement).toBe(emailInput);
  });
});
