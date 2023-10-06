import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/controller";
import Even from "./components/Even";
import useUpdate from "./hooks/useUpdate";
import useInput from "./hooks/useInput";

function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();

  useUpdate(() => {
    console.log("app updated");
  });

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1 className="heading">Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
