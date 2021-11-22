import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './Cart/index';
import uiReducer from './UI/index'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer
    }
});

export default store;