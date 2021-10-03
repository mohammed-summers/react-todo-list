import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo) => (
          <Todo
            todos={props.todos}
            setTodos={props.setTodos}
            text={todo.text}
            key={todo.id}
            todo={todo}
            filteredTodos={props.filteredTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
