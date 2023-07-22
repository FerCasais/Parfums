import { createSlice } from "@reduxjs/toolkit";
import CATEGORIES from '../../contants/data/categories.json'



const initialState = {
    data: CATEGORIES
}



const categoriesSlice = createSlice( {
    name: 'categories',
    initialState,
    reducers: {}

})

export default categoriesSlice.reducer