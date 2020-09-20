import React, { useState } from "react";
import stringCalc from "../../../utils/stringCalc";
import { isVariable, getVariableValue } from "../../../utils/getVariable";
import { isFunction, getFunction } from "../../../utils/getFunctions";
import getTextLength from "../../../utils/getTextLength";
import styles from "../main.module.css";
import { connect } from "react-redux";

const cellWidth = 59;

export const EditingCell = ({ onBlur, sheets, row, col }) => {
  const rowData = sheets.rows[row] || {};
  const cell = rowData[col] || {
    expression: "",
    value: "",
  };

  const [value, setValue] = useState("");
  const [width, setWidth] = useState(
    parseInt(getTextLength(cell.expression) / cellWidth) + 1
  );

  const onChangeHandler = (ev) => {
    const data = ev.target.value;

    if (getTextLength(data) > width * cellWidth) {
      setWidth(width + 1);
    }

    if (/^=/.test(data)) {
      const [error, result] = stringCalc(
        data.slice(1),
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
    } else {
      setValue(data);
    }
  };

  return (
    <div>
      <div
        className={styles.focusBlock}
        style={{
          width: width * cellWidth,
        }}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        <input
          defaultValue={cell.expression}
          autoFocus
          type="text"
          onChange={onChangeHandler}
          className={styles.editingBorderTextContent}
          onBlur={onBlur}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              console.log("updateValue");
            }
          }}
        />
      </div>
      {value}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sheets: state.sheets,
});

export default connect(mapStateToProps)(EditingCell);
