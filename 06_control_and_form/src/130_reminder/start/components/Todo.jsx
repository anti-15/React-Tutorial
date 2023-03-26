import List from "./List";
import Form from "./Form";
import { useState } from "react";
const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);
  const deleteTodos = (id) => {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    })

    setTodos(newTodos);
  }

  const createTodos = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  return (
    <>
      <List todoList={ todos } deleteTodos={deleteTodos} />
      <Form createTodos={ createTodos } />
    </>
  )
};
export default Todo;
