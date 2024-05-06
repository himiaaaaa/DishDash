import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserProfile from './UserProfile';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

const mockStore = configureStore([]);

describe('UserProfile', () => {

    const navigation = { navigate: jest.fn() };

    const props = {
        auth: {},
        user: {
            email: 'test@example.com',
            displayName: 'Test User',
        },
        navigation,
    };

    const store = mockStore({});

    it('renders correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <UserProfile {...props} />
            </Provider>
        );
        expect(getByText('Welcome to DishDash, Test User!')).toBeTruthy();
        expect(getByText('Your Logged-in Email')).toBeTruthy();
        expect(getByText('test@example.com')).toBeTruthy();
        expect(getByText('Back To Homepage')).toBeTruthy();
        expect(getByText('Sign Out')).toBeTruthy();
    });

    it('navigates to Home when Back To Homepage is pressed', () => {
        const { getByText } = render(
            <Provider store={store}>
                <UserProfile {...props} />
            </Provider>
        );
        fireEvent.press(getByText('Back To Homepage'));
        expect(navigation.navigate).toHaveBeenCalledWith('Home');
    });
});
