import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import { RestaurantImage } from './RestaurantImage.js'

jest.mock('../../../../redux/reducers/favouriteSlice', () => ({
   ...jest.requireActual('../../../../redux/reducers/favouriteSlice'),
   FetchFavorites: jest.fn().mockReturnValue({ type: 'mockFetchFavorites' }),
   AddToFavorites: jest.fn().mockReturnValue({ type: 'mockAddToFavorites' }),
   RemoveFromFavorites: jest.fn().mockReturnValue({ type: 'mockRemoveFromFavorites' }),
}))
 
const mockStore = configureStore([])
 
describe('RestaurantImage components', () => {
   let store;
   let component
   
   beforeEach(() => {

     store = mockStore({
       profile: { user: { uid: '1' } },
       favorites: { favorites: { items: [] } },
     })

     component = (
       <Provider store={store}>
         <RestaurantImage item={{ name: 'Test', image_url: 'https://test.com' }} navigation={{ navigate: jest.fn() }} />
       </Provider>
     );

   })

   afterEach(() => {
     jest.clearAllMocks();
   })

   it('image renders correctly', () => {
     const { getByTestId } = render(component);
     const image = getByTestId('restaurant-image');
     expect(image).toBeTruthy();
   })

   it('favorite button renders correctly', () => {
     const { getByTestId } = render(component);
     const favoriteButton = getByTestId('toggle-favorite');
     expect(favoriteButton).toBeTruthy();
   })

   it('heart icon renders correctly', () => {
     const { getByTestId } = render(component);
     const heartIcon = getByTestId('favorite-heart');
     expect(heartIcon).toBeTruthy();
   });
 
 });