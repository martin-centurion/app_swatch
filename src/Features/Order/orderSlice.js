import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'Order',
    initialState: {
        value: {
            userSelected: "",
            orders: [],
            ordersUserSelected: [],
            items: [],
            total: null,
            updatedAt: "",
            isCheckout: false,
        }
    },
    reducers: {
        addOrderItem: (state, action) => {
            state.value.items = action.payload.allCart
            state.value.total = action.payload.total;
            state.value.updatedAt = action.payload.updatedAt;
            state.value.isCheckout = action.payload.isCheckout;
        },
        setUserSelected: (state, action) => {
            state.value.ordersUserSelected = state.value.orders.filter(order => order.user === action.payload)
            state.value.userSelected = action.payload;
        },
        setAllOrders: (state, action) => {
            state.value.orders = action.payload;
        },
        clearOrder: (state) => { 
            state.value = {
                userSelected: "",
                orders: [],
                ordersUserSelected: [],
                items: [],
                total: null,
                updatedAt: "",
                isCheckout: false
            }
        },
    }
})

export const { setUserSelected, setAllOrders, addOrderItem, clearOrder} = orderSlice.actions;

export default orderSlice.reducer;