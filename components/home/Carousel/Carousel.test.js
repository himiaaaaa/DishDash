import React from 'react';
import { render } from '@testing-library/react-native';
import Carousel from './Carousel.js';

describe('Carousel component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Carousel />);

    const carousel = getByTestId('carousel-slide');
    expect(carousel).toBeTruthy();

  });

});


