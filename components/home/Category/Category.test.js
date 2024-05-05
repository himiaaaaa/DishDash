import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Category from './Category.js';
import { items } from '../../../constants/items';

describe('Category component', () => {
    let setCategoryMock;

    beforeEach(() => {
        setCategoryMock = jest.fn();
    });

    it('renders correctly', () => {
        const { getByText } = render(<Category setCategory={setCategoryMock} />);
        
        expect(getByText('Categories')).toBeTruthy();
        
        items.forEach(item => {
            expect(getByText(item.text)).toBeTruthy();
        });
    });

    it('allows category selection', () => {
        const { getByText } = render(<Category setCategory={setCategoryMock} />);
        
        const firstCategoryText = items[0].text;
        const categoryButton = getByText(firstCategoryText);
        
        fireEvent.press(categoryButton);
        
        expect(setCategoryMock).toHaveBeenCalledWith(firstCategoryText);
    });
});
