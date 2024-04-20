import { createSlice } from '@reduxjs/toolkit';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const initialState = {
  favorites: { items: [], uid: '' },
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites = {
         items: [...state.favorites.items, action.payload],
         uid: action.payload.uid,
      };
    },
    removeFromFavorites: (state, action) => {
      const itemToRemoveIndex = state.favorites.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.favorites.items.splice(itemToRemoveIndex, 1);
    },
    fetchFavorites: (state, action) => {
        state.favorites = {
          items: action.payload,
          uid: state.favorites.uid,
        };
    }
  },
});

export default favoriteSlice.reducer;

export function AddToFavorites(favorite){
  return async (dispatch) =>{
      try {
        let favorites = [];
        const docSnap = await getDoc(doc(db, 'users', favorite.uid, 'data', 'favorites'));
        if (docSnap.exists()) {
          let i = 0;
          while (docSnap.data()[i]) {
            favorites.push(docSnap.data()[i]);
            i++;
          }
        }
        favorites.push(favorite);
        await setDoc(doc(db, 'users', favorite.uid, 'data', 'favorites'), {
          ...favorites
        });
        dispatch(favoriteSlice.actions.addToFavorites(favorite));
      } catch (error) {
        return error;
      }
  }
}

export function RemoveFromFavorites(favorite){
  return async (dispatch) =>{
      try {
        const docRef = doc(db, 'users', favorite.uid, 'data', 'favorites')
        const docSnap = await getDoc(docRef);
        let favorites = []
        if (docSnap.exists()) {
          let i = 0;
          while (docSnap.data()[i]) {
            //console.log('docSnap.data()[i].favorite.name', docSnap.data()[i].favorite.name);
            //console.log('favorite.favorite.name', favorite.favorite.name);
            if(docSnap.data()[i].favorite.name !== favorite.favorite.name)
            favorites.push(docSnap.data()[i])
            i++;
          }
          await setDoc(docRef, { ...favorites });
        }
        dispatch(favoriteSlice.actions.removeFromFavorites(favorite));
      } catch (error) {
        return error;
      }
  }
}

export function FetchFavorites(uid){
    return async (dispatch) =>{
        try {
          const docSnap = await getDoc(doc(db, 'users', uid, 'data', 'favorites'));
          let favorites = []
          if (docSnap.exists()) {
            let i = 0;
            while (docSnap.data()[i]) {
              favorites.push(docSnap.data()[i])
              i++;
            }
          }
          dispatch(favoriteSlice.actions.fetchFavorites(favorites));
        } catch (error) {
          return error;
        }
    }
}


