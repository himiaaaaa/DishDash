import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SignUpForm from './SignUpForm';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

const mockStore = configureStore([]);

describe('SignUpForm', () => {
    const setEmail = jest.fn();
    const setPassword = jest.fn();
    const setDisplayName = jest.fn();
    const setConfirmPassword = jest.fn();
    const setIsSignUp = jest.fn();
    const clearError = jest.fn();

    const props = {
        auth: {},
        email: '',
        setEmail,
        displayName: '',
        setDisplayName,
        password: '',
        setPassword,
        confirmPassword: '',
        setConfirmPassword,
        errorMessage: '',
        setIsSignUp,
        clearError,
    };


    const store = mockStore({});

    it('renders correctly', () => {
        const { getByPlaceholderText, getByTestId } = render(
            <Provider store={store}>
                <SignUpForm {...props} />
            </Provider>
        );
        expect(getByTestId('sign-up-text')).toBeTruthy();
        expect(getByPlaceholderText('Email')).toBeTruthy();
        expect(getByPlaceholderText('Display Name')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(getByPlaceholderText('Confirm Password')).toBeTruthy();
        expect(getByTestId('sign-up-btn')).toBeTruthy();
    });

    it('calls setEmail, setDisplayName, setPassword and setConfirmPassword on input change', () => {
        const { getByPlaceholderText } = render(
            <Provider store={store}>
                <SignUpForm {...props} />
            </Provider>
        );
        fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
        expect(setEmail).toHaveBeenCalledWith('test@example.com');
        fireEvent.changeText(getByPlaceholderText('Display Name'), 'Test User');
        expect(setDisplayName).toHaveBeenCalledWith('Test User');
        fireEvent.changeText(getByPlaceholderText('Password'), 'password');
        expect(setPassword).toHaveBeenCalledWith('password');
        fireEvent.changeText(getByPlaceholderText('Confirm Password'), 'password');
        expect(setConfirmPassword).toHaveBeenCalledWith('password');
    });

    it('calls setIsSignUp when Sign In is pressed', () => {
        const { getByText } = render(
            <Provider store={store}>
                <SignUpForm {...props} />
            </Provider>
        );
        fireEvent.press(getByText('Sign In'));
        expect(setIsSignUp).toHaveBeenCalledWith(false);
    });

    it('displays an error message', () => {
        const errorMessage = 'An error occurred';
        const { getByText } = render(
            <Provider store={store}>
                <SignUpForm {...props} errorMessage={errorMessage} />
            </Provider>
        );
        expect(getByText(errorMessage)).toHaveTextContent('An error occurred');
    });
});
