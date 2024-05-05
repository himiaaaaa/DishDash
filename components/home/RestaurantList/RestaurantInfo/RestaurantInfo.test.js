import React from 'react';
import { render } from '@testing-library/react-native';
import { RestaurantInfo } from './RestaurantInfo';

describe('RestaurantInfo', () => {
  it('should render restaurant name, categories, and rating', () => {
    const mockItem = {
      name: 'Test Restaurant',
      categories: [
        { title: 'Italian' },
        { title: 'Pizza' }
      ],
      rating: 4.5
    };

    const { getByText, getAllByText } = render(<RestaurantInfo item={mockItem} />);

    const nameElement = getByText('Test Restaurant');
    expect(nameElement).toBeTruthy();

    const categoryElements = getAllByText(/Italian|Pizza/);
    expect(categoryElements.length).toBe(2); 

    const ratingElement = getByText('4.5');
    expect(ratingElement).toBeTruthy();
  });
});
