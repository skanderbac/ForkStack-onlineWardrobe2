import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import WardrobeReducer from '../Pages/WardrobeSlice'

export default configureStore({
    middleware: getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
    reducer: {
      Wardrobe: WardrobeReducer,
      
    },
  });

