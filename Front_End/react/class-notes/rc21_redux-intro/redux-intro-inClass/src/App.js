import "./App.css";
import Counter from "./components/counter/Counter";
import {Provider} from "react-redux";
import {store} from "./redux";
// import Todo from "./components/todo/Todo";
// import reducer from "./redux";

function App() {
  // const store = createStore(reducer)
  return (
    <div className="app">
      <Provider >
      <Counter />
      </Provider>
      <Todo />
    </div>
  );
}

export default App;
