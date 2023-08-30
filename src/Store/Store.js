import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice'
import shopReducer from '../Features/Shop/shopSlice'
import cartReducer from '../Features/Cart/cartSlice'
import userReducer from '../Features/User/userSlice'
import { shopApi } from '../Services/shopServices'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authApi } from '../Services/authServices'
import { orderApi } from '../Services/orderServices'

const store = configureStore({
    reducer: {
        counterReducer,
        shopReducer,
        cartReducer,
        userReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            shopApi.middleware, 
            authApi.middleware,
            orderApi.middleware),
})

setupListeners(store.dispatch)

export default store