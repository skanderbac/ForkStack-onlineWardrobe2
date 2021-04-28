import {configureStore} from "@reduxjs/toolkit";
//Appel des reducers
import reducers from "./Reducer";
import WardrobeReducer from "../Pages/WardrobeSlice";
export default configureStore({
    reducer: reducers,

})