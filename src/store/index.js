import pageReducer from "./reducer";
import { createStore } from "redux";

export const store = createStore(pageReducer);
