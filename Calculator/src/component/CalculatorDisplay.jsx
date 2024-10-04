import React from "react";
import styles from "./CalculatorDisplay.module.css";

const CalculatorDisplay = ({ displayValue }) => {
  return (
    <div>
      <h1 className="text-center">Calculator</h1>
      <input
        type="text"
        className={`w-100 rounded shadow-none border-2 px-2 py-3 bg-dark text-white text-end`}
        placeholder="00.0"
        value={displayValue}
        readOnly
      />
    </div>
  );
};

export default CalculatorDisplay;
