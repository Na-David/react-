import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/controller";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Simple Counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </div>
  );
}

export default App;
