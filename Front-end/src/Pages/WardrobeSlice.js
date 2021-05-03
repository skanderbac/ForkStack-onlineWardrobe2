import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  * as api from "../utils/wardrobe";
import useApi from "../Hooks/useApi";


export const createwardrobe = createAsyncThunk(
    "wardrobe",
    async (dresses, thunkAPI) => {
        const response = await api.ajoutdress(dresses);
        return response.data;
    }
);

export const getClasification = createAsyncThunk(
    "wardrobe",
    async (img, thunkAPI) => {
        const response = await api.getClasification(img);
        return response.data;
    }
);

let initialState = {
    values: [],
};
export const WardrobeSlice = createSlice({
    name: "Wardrobe",
    initialState,
    reducers: {
        getwardrobe: ( state ,action)=> {
            state.values = action.payload
        },
        getPreferencesP: ( state ,action)=> {
            state.values = action.payload
        },
        deletewardrobe:(state ,action)=>{
            const payload=action.payload;
            state.values=state.values.filter((dress)=>dress._id!==payload);
        }

    },
    extraReducers: {
        [createwardrobe.fulfilled]: (state, action) => {
            state.values.push(action.payload.data);
        },
    },


});

export const {
    getwardrobe,
    getPreferencesP,
    deletewardrobe
} = WardrobeSlice.actions;

//thunk
export const affichage = () => async (dispatch) => {
    try {
        const { data } = await api.getDresses();

        dispatch(getwardrobe(data));
        console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const affichagePreferences = () => async (dispatch) => {
    try {
        const { data } = await api.getPreferences("Ethnic","Men");

        dispatch(getPreferencesP(data));
        console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const supprimer = (id) => async (dispatch) => {
    try {
        await api.deleteDresses(id);
        dispatch(deletewardrobe(id));
    } catch (error) {
        console.log(error.message);
    }
};
export const selectwardrobe = (state) => state.Wardrobe.values;

export const selectPreferences = (state) => state.Wardrobe.values;

export default WardrobeSlice.reducer;
