import React, { useState } from "react";
import CalculatorContainer from "./component/CalculatorContainer";
import CalculatorDisplay from "./component/CalculatorDisplay";
import CalculatorButtons from "./component/CalculatorButtons";

function App() {

  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if(buttonText === 'C') {
      setCalVal("");
    }else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    }else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <>
      <CalculatorContainer>
        <CalculatorDisplay displayValue={calVal} />
      </CalculatorContainer>
      <CalculatorButtons onButtonClick={onButtonClick} />
    </>
  );
}

export default App;
