import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from './HomeHeader.js';

describe('Header Component', () => {
  test('displays city text', () => {
    const { getByText } = render(
      <Header city="Helsinki" navigation={{ navigate: jest.fn() }} />
    );

    const cityText = getByText('Helsinki');
    expect(cityText).toBeTruthy();
  });

  test('shopping basket button is clickable', () => {

    const navigationMock = {
      navigate: jest.fn(),
    };

    const { getByTestId } = render(
      <Header city="Helsinki" navigation={navigationMock} />
    );

    const shoppingBasketButton = getByTestId('shopping-basket');

    expect(shoppingBasketButton).toBeTruthy();

    fireEvent.press(shoppingBasketButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('Orders');
  });
});
