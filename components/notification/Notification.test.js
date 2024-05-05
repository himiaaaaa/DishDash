import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Notification from './Notification.js'; // adjust the import path as needed

jest.useFakeTimers();

describe('Notification', () => {
  it('renders the error message when errorMessage prop is provided', () => {
    const { getByText } = render(<Notification errorMessage="Test error" clearError={jest.fn()} />);
    expect(getByText('Test error')).toBeTruthy();
  });

  it('does not render when errorMessage prop is not provided', () => {
    const { queryByText } = render(<Notification errorMessage="" clearError={jest.fn()} />);
    expect(queryByText('Test error')).toBeNull();
  });

  it('calls clearError after 8 seconds when errorMessage prop is provided', async () => {
    const clearError = jest.fn();
    render(<Notification errorMessage="Test error" clearError={clearError} />);

    jest.advanceTimersByTime(8000);

    await waitFor(() => expect(clearError).toHaveBeenCalled());
  });
});

