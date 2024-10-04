import React from "react";
import ClockHeading from "./component/ClockHeading";
import ClockContent from "./component/ClockContent";
import ClockTime from "./component/ClockTime";
import ClockContainer from "./component/ClockContainer";

const App = () => {
  return (
    <ClockContainer>
      <ClockHeading />
      <ClockContent />
      <ClockTime />
    </ClockContainer>
  );
};

export default App;
