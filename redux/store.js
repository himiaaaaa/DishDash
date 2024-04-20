import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

const store = configureStore({
    reducer: rootReducer,
})

store.subscribe(() => {console.log('store getstate', store.getState())})

export default store