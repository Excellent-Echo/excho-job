import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./rootreducer";

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
