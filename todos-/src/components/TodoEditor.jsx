import { useState } from "react";
import "./TodoEditor.css";

export default function TodoEditor() {
  const [todo, setTodo] = useState("");

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="TodoEditor">
      <input value={todo} onChange={onChangeTodo} placeholder="New Todo..." />
      <button>Confirm</button>
    </div>
  );
}
