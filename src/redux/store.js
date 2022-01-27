import { createStore } from "redux";
import allReducers from "./allReducers";

const store = createStore(allReducers);

export default store;
