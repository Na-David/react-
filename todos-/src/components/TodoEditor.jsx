import { useRef, useState, useContext } from "react";
import "./TodoEditor.css";
import { TodoContext } from "../../../src/TodoContext";

export default function TodoEditor() {
  const { onCreate } = useContext(TodoContext);

  const [todo, setTodo] = useState("");
  const inputRef = useRef();

  const onClick = () => {
    if (todo === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(todo);
    setTodo("");
  };

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // 13 === enter
      onClick();
    }
  };

  return (
    <div className="TodoEditor">
      <input
        ref={inputRef}
        value={todo}
        onKeyDown={onKeyDown}
        onChange={onChangeTodo}
        placeholder="New Todo..."
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
}
