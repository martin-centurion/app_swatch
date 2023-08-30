import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice ({
    name: 'Shop',
    initialState: {
        value: {
            categorySelected: '',
            idSelected:'',
            nameProductSelected: ''
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.categorySelected = action.payload
        },
        setIdSelected: (state, action) => {
            state.value.idSelected = action.payload
        },
        setNameProductSelected: (state, action) => {
            state.value.nameProductSelected = action.payload
        }
    }
})

export const { setCategorySelected, setIdSelected, setNameProductSelected } = shopSlice.actions;

export default shopSlice.reducer;