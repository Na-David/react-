import "./TodoItem.css";

export default function TodoItem() {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">todo</div>
      <div className="date">Date</div>
      <button>delete</button>
    </div>
  );
}
