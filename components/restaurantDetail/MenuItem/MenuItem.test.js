import React from 'react';
import { act } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../../redux/reducers/cartSlice';
import profileSlice from '../../../redux/reducers/profileSlice';
import MenuItem from './MenuItem.js';

describe('MenuItem component', () => {
    const initialState = {
        cart: {
            selectedItems: {
                items: [],
                restaurantName: '',
                userEmail: '',
            },
        },
        user: {
            isAuthenticated: true,
            user: {
                email: 'test@example.com',
            },
        },
    };

    const foodsMenu = [
        {
            title: 'Food 1',
            description: 'Description 1',
            price: '$10',
            image: 'https://example.com/image1.jpg',
            restaurantName: 'Test Restaurant',
            userEmail: 'test@example.com',
        },
        {
            title: 'Food 2',
            description: 'Description 2',
            price: '$15',
            image: 'https://example.com/image2.jpg',
        },
    ];

    const user = {
        isAuthenticated: true,
        user: {
            email: 'test@example.com',
        },
    };

    const restaurantName = 'Test Restaurant';

    const store = configureStore({
        reducer: {
            cart: cartReducer,
            user: profileSlice,
        },
        preloadedState: initialState,
    });

    it('renders correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <MenuItem
                    restaurantName={restaurantName}
                    foodsMenu={foodsMenu}
                    navigation={{ navigate: jest.fn() }}
                    user={user}
                />
            </Provider>
        );

        foodsMenu.forEach(food => {
            expect(getByText(food.title)).toBeTruthy();
            expect(getByText(food.description)).toBeTruthy();
            expect(getByText(food.price)).toBeTruthy();
        });
    });

    it('handles add and remove from cart correctly', () => {
        const { getAllByText } = render(
            <Provider store={store}>
                <MenuItem
                    restaurantName={restaurantName}
                    foodsMenu={foodsMenu}
                    navigation={{ navigate: jest.fn() }}
                    user={user}
                />
            </Provider>
        );

        const addButton = getAllByText('+')[0];
        const removeButton = getAllByText('-')[0];

        act(() => {
            fireEvent.press(addButton);
        });

        expect(store.getState().cart.selectedItems.items.length).toBe(1);

        act(() => {
            fireEvent.press(removeButton);
        });

        expect(store.getState().cart.selectedItems.items.length).toBe(0);
    });
});


