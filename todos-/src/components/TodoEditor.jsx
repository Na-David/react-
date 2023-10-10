import { useState } from "react";
import "./TodoEditor.css";

export default function TodoEditor({ onCreate }) {
  const [todo, setTodo] = useState("");

  const onClick = () => {
    onCreate(todo);
  };

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="TodoEditor">
      <input value={todo} onChange={onChangeTodo} placeholder="New Todo..." />
      <button onClick={onClick}>Add</button>
    </div>
  );
}
