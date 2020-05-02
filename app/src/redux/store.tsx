import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const middlewares = [thunk];
const composeEnhancers = composeWithDevTools({ trace: true });

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
