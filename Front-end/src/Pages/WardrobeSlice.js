import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  * as api from "../utils/wardrobe";
export const createwardrobe = createAsyncThunk(
    "wardrobe",
    async (dresses, thunkAPI) => {
        const response = await api.ajoutdress(dresses);
        return response.data;
    }
);

let initialState = {
    values: [],
};
export const coursesSlice = createSlice({
    name: "Wardrobe",
    initialState,
    reducers: {
        getwardrobe: ( state ,action) {
            state.values = action.payload
        },

    },


});

export const {

} = coursesSlice.actions;

