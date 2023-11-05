import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "Studying React ",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Climbing ",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "Japanese ",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState([mockData]);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
        }
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
