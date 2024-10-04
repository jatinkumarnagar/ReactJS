import React, { useState } from "react";
import TodoAppContainer from "./TodoAppContainer";
import { AiFillDelete } from "react-icons/ai";

const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {

  return (
    <div className="">
      <li className="list-group-item">
        <div className="row">
          <div className="col-5">
            <p>{todoName}</p>
          </div>
          <div className="col-4">
            <p>{todoDate}</p>
          </div>
          <div className="col-3">
            <button className="btn btn-danger w-100" onClick={() => {onDeleteClick(todoName)}}><AiFillDelete /></button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
