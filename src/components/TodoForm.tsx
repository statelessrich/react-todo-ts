import React, { useRef, useState } from "react";
import shortid from "shortid";

import { TodoInterface, TodoFormInterface } from "./../interfaces";

export const TodoForm = (props: TodoFormInterface) => {
  // ref for form input.
  const inputRef = useRef<HTMLInputElement>(null);

  // create form state.
  const [formState, setFormState] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState(event.target.value);
  }

  function handleInputEnter(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      // create new todo.
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        text: formState,
        isCompleted: false,
      };

      props.handleTodoCreate(newTodo);

      // reset input field.
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  return (
    <div className="todo-form">
      <input
        className="form-control"
        type="text"
        ref={inputRef}
        placeholder="Enter new todo"
        onChange={(event) => handleInputChange(event)}
        onKeyPress={(event) => handleInputEnter(event)}
      />
    </div>
  );
};
