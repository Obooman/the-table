import React from "react";
import stringCalc from "./utils/stringCalc";
import { isVariable, getVariableValue } from "./utils/getVariable";
import { isFunction, getFunction } from "./utils/getFunctions";

function App() {
  const onChangeHandler = (ev) => {
    const data = ev.target.value;
    console.log(
      stringCalc(
        data,
        {
          isVariable,
          getVariableValue,
        },
        {
          isFunction,
          getFunction,
        }
      )
    );
  };
  return (
    <div className="App">
      <input type="text" onChange={onChangeHandler} />
    </div>
  );
}

export default App;
