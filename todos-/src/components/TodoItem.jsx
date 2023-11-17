import { TodoDispatchContext } from "../../../src/TodoContext";
import "./TodoItem.css";
import { memo, useContext } from "react";

function TodoItem({ id, isDone, createdDated, content }) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(createdDated).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>delete</button>
    </div>
  );
}

export default memo(TodoItem);
