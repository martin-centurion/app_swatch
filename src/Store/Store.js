import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice'
import shopReducer from '../Features/Shop/shopSlice'
import cartReducer from '../Features/Cart/cartSlice'
import userReducer from '../Features/User/userSlice'
import orderReducer from "../Features/Order/orderSlice"
import { shopApi } from '../Services/shopServices'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authApi } from '../Services/authServices'

const store = configureStore({
    reducer: {
        counterReducer,
        shopReducer,
        cartReducer,
        userReducer,
        orderReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            shopApi.middleware, 
            authApi.middleware),
})

setupListeners(store.dispatch)

export default store