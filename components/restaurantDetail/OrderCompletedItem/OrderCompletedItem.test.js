import React from 'react';
import { render } from '@testing-library/react-native';
import OrderCompletedItem from './OrderCompletedItem.js';

describe('OrderCompletedItem Component', () => {
    const foodsMenu = [
        {
            title: 'Pizza',
            description: 'Cheesy pizza with pepperoni',
            price: '$12.99',
            image: 'https://example.com/pizza.jpg',
        },
        {
            title: 'Burger',
            description: 'Juicy beef burger with fries',
            price: '$8.99',
            image: 'https://example.com/burger.jpg',
        },
    ];

    // Test if the component renders correctly
    it('renders correctly with provided foodsMenu', () => {
        const { getAllByText, getAllByTestId } = render(
            <OrderCompletedItem foodsMenu={foodsMenu} />
        );

        foodsMenu.forEach((food, index) => {

            const titleElement = getAllByText(food.title);
            expect(titleElement[0].props.children).toBe(food.title);

            const descriptionElement = getAllByText(food.description);
            expect(descriptionElement[0].props.children).toBe(food.description);

            const priceElement = getAllByText(food.price);
            expect(priceElement[0].props.children).toBe(food.price);

            const imageElement = getAllByTestId('food-image')[index]
            expect(imageElement.props.source.uri).toBe(food.image);
        });
    });
});
