import { txtSlicer } from "utils/func";

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;

  return (
    <div className="box">
      <p className="mb-8">
        <span className="bold">Title: </span>
        {title}
      </p>
      <p className="mb-8">
        <span className="bold">ID:</span> {id}
      </p>
      <p className="mb-8">
        <span className="bold">Statue</span>: {completed ? "✔" : "😒"}
      </p>
    </div>
  );
};

export default TodoItem;
