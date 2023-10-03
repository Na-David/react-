import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/controller";
import Even from "./components/Even";
import useUpdate from "./hooks/useUpdate";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useUpdate();

  useEffect(() => {
    console.log("업뎃");
  });

  useEffect(() => {
    console.log("업뎃");
  });

  const onClickButton = (value) => {
    setCount(count + value);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
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
