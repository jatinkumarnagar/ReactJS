import React from "react";
import styles from "./CalculatorButtons.module.css";

const CalculatorButtons = ({ onButtonClick }) => {
  const buttonNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "/",
    "*",
    "-",
    "+",
    ".",
    "=",
    "C",
  ];

  return (
    <div className="border border-2 p-3 container my-5 d-flex justify-content-center">
      <div className={`${styles['button-box']} d-flex justify-content-center flex-wrap border p-3`}>
        <h1 className="text-center w-100">Buttons</h1>
        {buttonNames.map((buttonName) => (
          <button
            className={`${styles["cal-btn"]} btn btn-dark`}
            onClick={() => onButtonClick(buttonName)}
            key={buttonName}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorButtons;
