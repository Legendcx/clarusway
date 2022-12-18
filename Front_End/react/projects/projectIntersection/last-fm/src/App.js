import "./App.css";
import Router from "./router/Router";
import { Provider } from "react-redux";
import store from "./app/store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>

      <Router />
    </div>
  );
}

export default App;
