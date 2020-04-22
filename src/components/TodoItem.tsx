import { TodoItemInterface } from "../interfaces";
import React from "react";

const TodoItem = (props: TodoItemInterface) => {
  return (
    <div className="todo-item">
      {/* check */}
      <div onClick={() => props.handleTodoComplete(props.todo.id)}>
        {props.todo.isCompleted ? (
          <span className="todo-item-checked">✔</span>
        ) : (
          <span className="todo-item-unchecked"></span>
        )}
      </div>

      {/* input */}
      <div className="todo-item-input-wrapper">
        <input
          className="form-control"
          value={props.todo.text}
          onBlur={props.handleTodoBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleTodoUpdate(event, props.todo.id)
          }
        />
      </div>

      {/* <remove>`</remove> */}
      <div
        className="item-remove"
        onClick={() => props.handleTodoRemove(props.todo.id)}
      >
        x
      </div>
    </div>
  );
};

export default TodoItem;
