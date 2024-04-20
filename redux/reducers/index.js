import { combineReducers } from "@reduxjs/toolkit";

import cartSlice from './cartSlice'
import profileSlice from './profileSlice'

const rootReducer = combineReducers({
    cart: cartSlice,
    profile: profileSlice,
})

export { rootReducer }