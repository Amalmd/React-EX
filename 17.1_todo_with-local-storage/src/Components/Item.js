import React from "react";

const Item = (props) => {
  return (
    <div>
      <h1>Todo List</h1>
      <input
        placeholder="Add New Task"
        value={props.task}
        onChange={props.onChangeInput}
        id="task"
      ></input>
      <button onClick={props.onAddItem}>ADD</button>
    </div>
  );
};

export default Item;
