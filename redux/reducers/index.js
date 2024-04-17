import { combineReducers } from "@reduxjs/toolkit";

import cartSlice from './cartSlice'

const rootReducer = combineReducers({
    cart: cartSlice
})

export { rootReducer }