import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Favs from './Favs';
import noFavImage from '../../assets/images/no-fav.png';

jest.mock('../../redux/reducers/favouriteSlice', () => ({
  ...jest.requireActual('../../redux/reducers/favouriteSlice'),
  FetchFavorites: jest.fn().mockReturnValue({ type: 'mockFetchFavorites' }),
  AddToFavorites: jest.fn().mockReturnValue({ type: 'mockAddToFavorites' }),
  RemoveFromFavorites: jest.fn().mockReturnValue({ type: 'mockRemoveFromFavorites' }),
}))

const mockStore = configureStore([]);

describe('Favs Component', () => {
  let store;
  let navigationMock;

  beforeEach(() => {

    store = mockStore({
      favorites: {
        favorites: {
          items: [
            {
              favorite: {
                id: 1,
                name: 'Test Restaurant',
              },
            },
          ],
        },
      },
      profile: {
        user: {
          uid: 'test-uid',
        },
      },
    });

    navigationMock = {
      navigate: jest.fn(),
    };
  });

  it('renders RestaurantList when there are favorites', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Favs navigation={navigationMock} />
      </Provider>
    );

    const restaurantList = getByTestId('restaurant-list');
    expect(restaurantList).toBeTruthy();
    
    expect(getByText('Test Restaurant')).toBeTruthy();
  });

  it('renders no favorites UI when there are no favorites', () => {
    store = mockStore({
      favorites: {
        favorites: {
          items: [],
        },
      },
    });

    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Favs navigation={navigationMock} />
      </Provider>
    );

    expect(getByTestId('no-fav-view')).toBeTruthy();
    
    expect(getByText('No Favorites yet')).toBeTruthy();

    const noFavImageElement = getByTestId('no-fav-image');
    expect(noFavImageElement.props.source).toEqual(noFavImage);
  });
});
