import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTodos = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const getAnalyzedTodoData = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const { totalCount, doneCount, notDoneCount } = getAnalyzedTodoData();

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <div></div>
      <input value={search} onChange={onChangeSearch} placeholder="Search.." />
      <div className="todos_wrapper">
        {filterTodos().map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
