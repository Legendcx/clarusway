import Events from "./components/1-events/event";
import Counter from "./components/2-classComponent/Counter";


function App() {
  return (
    <div>
     <Events />
     <Counter />
     <Counter count={5} />
    </div>
  );
}
export default App;
