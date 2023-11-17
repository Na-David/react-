import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../../../src/TodoContext";

export default function TodoList() {
  const todos = useContext(TodoStateContext);

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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <div>
        <div>Total: {totalCount}</div>
        <div>Done: {doneCount}</div>
        <div>Not Yet Done: {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder="Search.." />
      <div className="todos_wrapper">
        {filterTodos().map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}
