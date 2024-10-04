import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterAction.increment());
  };

  const handleDecrement = () => {
    // dispatch({ type: "DECREMENT" });
    dispatch(counterAction.decrement());
  };

  const handleAdd = () => {
    dispatch(
      counterAction.add({
        num: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(
      counterAction.subtract({
        num: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyAction.toggle());
  };

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          className="form-control border-black shadow-none w-25"
          placeholder="Text Here"
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Controls;
