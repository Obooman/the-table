import React, { useState } from "react";
import stringCalc from "../../../utils/stringCalc";
import { isVariable, getVariableValue } from "../../../utils/getVariable";
import { isFunction, getFunction } from "../../../utils/getFunctions";
import getTextLength from "../../../utils/getTextLength";
import styles from "../main.module.css";

const cellWidth = 59;

export const EditingCell = ({ onBlur }) => {
  const [value, setValue] = useState("");
  const [width, setWidth] = useState(1);

  const onChangeHandler = (ev) => {
    const data = ev.target.value;

    if (getTextLength(data) > width * cellWidth) {
      setWidth(width + 1);
    }

    const [error, result] = stringCalc(
      data,
      {
        isVariable,
        getVariableValue,
      },
      {
        isFunction,
        getFunction,
      }
    );

    if (!error) {
      setValue(result);
    } else {
      setValue("#ERROR");
    }
  };

  return (
    <div>
      <div
        className={styles.focusBlock}
        style={{
          width: width * cellWidth,
        }}
      >
        <input
          autoFocus
          type="text"
          onChange={onChangeHandler}
          className={styles.editingBorderTextContent}
          onBlur={onBlur}
        />
      </div>
      {value}
    </div>
  );
};
