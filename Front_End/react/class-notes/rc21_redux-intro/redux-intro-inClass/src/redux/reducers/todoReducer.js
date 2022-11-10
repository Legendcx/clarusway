
import { ADD_TODO } from "../types/todotype";

const initialState = {
  todoList: [{id: new Date().getTime(), text:"", completed: false}],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default todoReducer;
