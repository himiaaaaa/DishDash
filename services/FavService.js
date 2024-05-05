import { AddToFavorites, RemoveFromFavorites } from "../redux/reducers/favouriteSlice";

export const toggleFavorite = (uid, item, isFavorite, dispatch, navigation) => {
    if (!uid) {
      navigation.navigate('ProfilePage')
      return;
    }
  
    if (isFavorite) {
      dispatch(RemoveFromFavorites({ uid, favorite: item }));
    } else {
      dispatch(AddToFavorites({ uid, favorite: item }));
    }
};