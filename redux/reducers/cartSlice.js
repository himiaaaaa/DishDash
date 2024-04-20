import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItems: { items: [], restaurantName: '', userEmail: '' },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      state.selectedItems = {
         items: [...state.selectedItems.items, action.payload],
         restaurantName: action.payload.restaurantName,
         userEmail: action.payload.userEmail,
      };

    },
    removeFromCart: (state, action) => {

      const itemToRemoveIndex = state.selectedItems.items.findIndex(
        (item) => item.title === action.payload.title
      );

      state.selectedItems.items.splice(itemToRemoveIndex, 1);

    }
  },
});

export default cartSlice.reducer;

export function AddToCart(food){
  return (dispatch) =>{
      dispatch(cartSlice.actions.addToCart(food));
  }
}

export function RemoveFromCart(food){
  return (dispatch) =>{
      dispatch(cartSlice.actions.removeFromCart(food));
  }
}
