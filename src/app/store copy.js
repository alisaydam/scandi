import { createStore, combineReducers } from "redux";
import reducer, { selectedCurrency } from "./reducers/reducer";

export const rootReducer = combineReducers({ reducer, selectedCurrency });

export const store = createStore(rootReducer);
 
