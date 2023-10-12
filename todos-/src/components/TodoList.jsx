import { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input value={search} onChange={onChangeSearch} placeholder="Search.." />
      <div className="todos_wrapper">
        {todos.map((todos) => (
          <div>{todos.content}</div>
        ))}
      </div>
    </div>
  );
}
