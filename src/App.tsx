import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { TodoInterface } from "./interfaces";

// Import styles
import "./styles/styles.css";

export const App = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const handleTodoCreate = (todo: TodoInterface) => {
    // copy todos state.
    const newTodosState: TodoInterface[] = [...todos];

    // add new todo.
    newTodosState.push(todo);

    // update state.
    setTodos(newTodosState);
  };

  const handleTodoUpdate = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    // copy todos state.
    const newTodosState: TodoInterface[] = [...todos];

    // find todo and update text.
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text =
      event.target.value;

    // update state.
    setTodos(newTodosState);
  };

  const handleTodoRemove = (id: string) => {
    // remove todo by filtering on id.
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id,
    );

    // update state.
    setTodos(newTodosState);
  };

  const handleTodoComplete = (id: string) => {
    // copy todos state.
    const newTodosState: TodoInterface[] = [...todos];

    // find todo and toggle isComplete.
    newTodosState.find(
      (todo: TodoInterface) => todo.id === id,
    )!.isCompleted = !newTodosState.find(
      (todo: TodoInterface) => todo.id === id,
    )!.isCompleted;

    // update state.
    setTodos(newTodosState);
  };

  const handleTodoBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    // if no input, add error.
    if (event.target.value.length === 0) {
      event.target.classList.add("todo-input-error");
    } else {
      event.target.classList.remove("todo-input-error");
    }
  };

  return (
    <div className="app w-50 m-5">
      {/* todo form */}
      <TodoForm todos={todos} handleTodoCreate={handleTodoCreate}></TodoForm>

      {/* todo list */}
      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
      ></TodoList>
    </div>
  );
};
