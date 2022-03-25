import { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Handlers
  const getUsers = async () => {
    setIsLoading(true);
    const results = await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json());
    setTodos(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div className="boxes-wrapper">
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    );
  }
};

export default Todos;
