import React, { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

const TodoAddItem = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <form className="container text-center" onSubmit={handleAddButtonClicked}>
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter Item Name"
            className="px-2 py-1 shadow-sm w-100 rounded"
            onChange={handleNameChange}
            value={todoName}
            required
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="px-2 py-1 shadow-sm w-100 rounded"
            onChange={handleDateChange}
            value={dueDate}
            required
          />
        </div>
        <div className="col-3">
          <button className="btn btn-success w-100">
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoAddItem;
