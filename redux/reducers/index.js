import { combineReducers } from "@reduxjs/toolkit";

import cartSlice from './cartSlice'
import profileSlice from './profileSlice'
import favouriteSlice from './favouriteSlice'

const rootReducer = combineReducers({
    cart: cartSlice,
    profile: profileSlice,
    favorites: favouriteSlice,
})

export { rootReducer }