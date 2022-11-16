import React, { useState, useReducer } from "react";
import Item from "./Item";

const ACTIONS = {
  ADD_TODO: "add-todo",
  ADD_DELETE: "add-delete",
  ADD_TOGGLE: "add-toggle",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(task)];
  }
}

function newTodo(task) {
  return { id: Date.now(), name: task, complete: false };
}

const TodoHandler = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  const inputHandler = (event) => {
    event.preventDefault();

    dispatch({ type: ACTIONS.ADD_TODO, payload: { task: task } });
    setTask();
  };
  console.log(todos);

  const onReadItem = () => {
    return todoList.map((item) => {
      return (
        <div key={item.id}>
          <h3>
            {item.todo} - {item.done ? "V" : "X"}
          </h3>
          <div>
            <button onClick={() => onDeleteItem(item.id)}>Delete</button>
            <button onClick={() => onUpdateItem(item.id)}>Update Status</button>
          </div>
        </div>
      );
    });
  };

  const onAddItem = () => {
    const newItem = {
      todo: title,
      id: Math.random().toString(),
      done: false,
    };

    setTodoList((prev) => [...prev, newItem]);
    setTitle("");
    console.log(todoList);
  };

  const onDeleteItem = (id) => {
    setTodoList((prev) => {
      const updatedTodoArr = prev.filter((item) => item.id !== id);
      return updatedTodoArr;
    });
  };

  const onUpdateItem = (id) => {
    setTodoList((prev) => {
      const updatedTodoArr = prev.map((task) => {
        if (task.id !== id) {
          return task;
        } else {
          task = { ...task, done: !task.done };
          return task;
          // return { todo, id };
        }
      });
      return updatedTodoArr;
    });
  };

  return (
    <div>
      <Item onChangeInput={inputHandler} task={title} onAddItem={onAddItem} />
      <div>{onReadItem()}</div>
    </div>
  );
};

export default TodoHandler;
