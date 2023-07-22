import { createSlice } from "@reduxjs/toolkit";
import DETAILS  from '../../contants/data/details.json'

const initialState = { 
    data: DETAILS
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})

export default productsSlice.reducer