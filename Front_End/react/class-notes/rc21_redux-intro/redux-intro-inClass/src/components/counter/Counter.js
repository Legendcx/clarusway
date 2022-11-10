import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:0</h1>
      <div>
        <button className="counter-button positive" onClick={() => dispatch({type: "INCREMENT"})}>increase</button>
        <button className="counter-button zero" onClick={() => dispatch({type: "CLEAR"})}>reset</button>
        <button className="counter-button negative" onClick={() => dispatch({type: "DICREMENT"})}>decrease</button>
      </div>
    </div>
  );
};

export default Counter;
