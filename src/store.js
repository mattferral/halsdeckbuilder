import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

import { configureStore, applyMiddleware, thunk } from "@reduxjs/toolkit";

/** Creates store and instantiates persistance */

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, root);


export const store = configureStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export const persistedStore = persistStore(store);