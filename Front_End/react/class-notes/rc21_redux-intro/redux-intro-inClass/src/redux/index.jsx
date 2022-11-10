const initialState = {
  
};

import {legacy_createStore as createStore} from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducer ({
  count: counterReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);