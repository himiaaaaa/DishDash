import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SignInForm from './SignInForm';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

const mockStore = configureStore([]);

describe('SignInForm', () => {
    const setEmail = jest.fn();
    const setPassword = jest.fn();
    const setIsSignUp = jest.fn();
    const clearError = jest.fn();

    const props = {
        auth: {},
        email: '',
        setEmail,
        password: '',
        setPassword,
        errorMessage: '',
        setIsSignUp,
        clearError,
    };

    const store = mockStore({});

    it('renders correctly', () => {
        const { getByTestId, getByPlaceholderText } = render(
            <Provider store={store}>
                <SignInForm {...props} />
            </Provider>
        );
        expect(getByTestId('sign-in-text')).toBeTruthy();
        expect(getByPlaceholderText('Email')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(getByTestId('sign-in-btn')).toBeTruthy();
    });

    it('calls setEmail and setPassword on input change', () => {
        const { getByPlaceholderText } = render(<SignInForm {...props} />);
        fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
        expect(setEmail).toHaveBeenCalledWith('test@example.com');
        fireEvent.changeText(getByPlaceholderText('Password'), 'password');
        expect(setPassword).toHaveBeenCalledWith('password');
    });

    it('calls setIsSignUp when Sign Up is pressed', () => {
        const { getByText } = render(<SignInForm {...props} />);
        fireEvent.press(getByText('Sign Up'));
        expect(setIsSignUp).toHaveBeenCalledWith(true);
    });

    it('displays an error message', () => {
        const errorMessage = 'An error occurred';
        const { getByText } = render(
            <Provider store={store}>
                <SignInForm {...props} errorMessage={errorMessage} />
            </Provider>
        );
        expect(getByText(errorMessage)).toHaveTextContent('An error occurred');
    });
});

