import "./TodoItem.css";

export default function TodoItem({
  id,
  isDone,
  createdDated,
  content,
  onUpdate,
}) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(createdDated).toLocaleDateString()}</div>
      <button>delete</button>
    </div>
  );
}
