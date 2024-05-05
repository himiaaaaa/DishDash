import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ViewCart from './ViewCart';
import cartSlice from '../../../redux/reducers/cartSlice';

describe('ViewCart Component', () => {
    let store;
    let navigationMock;
    let userMock;
    let restaurantName;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                cart: cartSlice,
            },
            preloadedState: {
                cart: {
                    selectedItems: {
                        items: [
                            {
                                restaurantName: 'Test Restaurant',
                                title: 'Test Item',
                                price: '€10.00',
                            },
                        ],
                        restaurantName: 'Test Restaurant',
                    },
                },
            },
        });

        navigationMock = {
            navigate: jest.fn(),
        };

        userMock = {
            user: {
                email: 'test@example.com',
            },
        };

        restaurantName = 'Test Restaurant';
    });

    it('renders ViewCart component and handles interaction', async () => {
        const { getByText, queryByText, getAllByTestId, getByRole } = render(
            <Provider store={store}>
                <ViewCart
                    navigation={navigationMock}
                    user={userMock}
                    restaurantName={restaurantName}
                />
            </Provider>
        );

        expect(getByText('View Cart')).toBeTruthy();
        expect(getByText('€10.00')).toBeTruthy();

        fireEvent.press(getByText('View Cart'));
        expect(queryByText('Your order')).toBeTruthy(); 

        const cartItems = getAllByTestId('cart-item');
        expect(cartItems.length).toBe(1); 

        expect(getByText('Subtotal')).toBeTruthy();
        expect(getByText('Delivery Fee')).toBeTruthy();
        expect(getByText('€5.00')).toBeTruthy();
        expect(getByText('Total Fee')).toBeTruthy();
        expect(getByText('€15.00')).toBeTruthy();

        fireEvent.press(queryByText('Back'));
        expect(queryByText('Your order')).toBeNull();

    });
});




