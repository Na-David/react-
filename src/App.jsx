import { useState, useEffect } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/controller";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1 className="heading">Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
