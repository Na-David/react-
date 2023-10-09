import { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input value={search} onChange={onChangeSearch} placeholder="Search.." />
    </div>
  );
}
