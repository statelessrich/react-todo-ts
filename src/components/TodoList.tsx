import React from "react";
import TodoItem from "./TodoItem";
import { TodoListInterface } from "./../interfaces";

export const TodoList = (props: TodoListInterface) => {
  return (
    <div className="todo-list mt-3">
      <ul className="list-group">
        {" "}
        {props.todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <TodoItem
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoComplete={props.handleTodoComplete}
              handleTodoBlur={props.handleTodoBlur}
            ></TodoItem>
          </li>
        ))}
      </ul>
    </div>
  );
};
