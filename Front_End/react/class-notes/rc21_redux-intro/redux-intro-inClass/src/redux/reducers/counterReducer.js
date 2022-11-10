import { CLEAR, DECREMENT, INCREMENT } from "../types/counterType";


const initialState = {
  counter :  0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {counter: state.counter + 1};

      case DECREMENT:
        return {counter: state.counter - 1};

      case CLEAR:
        return {counter: 0};
        //*veya return initialState; yazabiliriz.
  
    default:
      //* redux ta burasının bir şey döndürmesi gerekiyor.
      return state;
  }
};

export default counterReducer;
