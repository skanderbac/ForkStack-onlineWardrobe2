import {combineReducers} from "redux";
import products from "./slices/ProductSlice";
import Wardrobe from "../Pages/WardrobeSlice";

//O Peut mettre toutes les rducers qu'on a déja
const reducers =combineReducers({products,Wardrobe});

export default reducers;