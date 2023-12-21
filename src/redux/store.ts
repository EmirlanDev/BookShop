import { createStore, applyMiddleware, StoreEnhancer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { MainReducer } from "./Reducer/MainReducer";

export const store = createStore(
  MainReducer,
  composeWithDevTools(applyMiddleware())
);

export type RootState = ReturnType<typeof store.getState>;
