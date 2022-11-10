import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/actions/counterAction";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count.counter);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch(increment())}
          // onClick={() => dispatch({ type: "INCREMENT" })}

        >
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch(clear())}
          // onClick={() => dispatch({ type: "CLEAR" })}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch(decrement())}
          // onClick={() => dispatch({ type: "DECREMENT" })}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
