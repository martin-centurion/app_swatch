import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice ({
    name: 'Shop',
    initialState: {
        value: {
            categorySelected: "",
            idSelected: "",
            allProducts: [],
            productsSelected: [],
            productIdSelected: []
        }
    }, 
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.productsSelected = state.value.allProducts.filter(product => product.category === action.payload)
            state.value.categorySelected = action.payload;
        },
        setIdSelected: (state, action) => {
            state.value.productIdSelected = state.value.allProducts.find((product) => product.id === action.payload)
            state.value.idSelected = action.payload;
        },
        setAllProducts: (state, action) => {
            state.value.allProducts = action.payload;
        },
    }
})

export const { setCategorySelected, setIdSelected, setAllProducts } = shopSlice.actions;

export default shopSlice.reducer;