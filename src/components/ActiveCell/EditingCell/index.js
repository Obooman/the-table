import React, { useState } from "react";
import stringCalc from "../../../utils/stringCalc";
import { isVariable, getVariableValue } from "../../../utils/getVariable";
import { isFunction, getFunction } from "../../../utils/getFunctions";
import getTextLength from "../../../utils/getTextLength";
import styles from "../main.module.css";
import { connect } from "react-redux";

const cellWidth = 59;

export const EditingCell = ({ dispatch, onBlur, sheets, row, col }) => {
  const rowData = sheets.rows[row] || {};
  const cell = rowData[col] || {
    expression: "",
    value: "",
  };

  const [width, setWidth] = useState(
    parseInt(getTextLength(cell.expression) / cellWidth) + 1
  );

  const onChangeHandler = (ev) => {
    const data = ev.target.value;

    if (getTextLength(data) > width * cellWidth) {
      setWidth(width + 1);
    }
  };

  const onUpdateHandler = (ev) => {
    const data = ev.target.value;
    const isExpression = /^=/.test(data);
    let result;
    let expression;

    if (isExpression) {
      expression = data.slice(1);
      const [error, calculateResult] = stringCalc(
        expression,
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
        result = calculateResult;
      } else {
        result = "#ERROR";
      }
    } else {
      result = data;
    }

    dispatch.sheets.updateValue({
      row,
      column: col,
      isExpression,
      value: result,
      expression: expression,
    });

    onBlur && onBlur(ev);
  };

  const onBlurHandler = (ev) => {
    onUpdateHandler(ev);
    onBlur && onBlur(ev);
  };

  return (
    <div>
      <div
        className={styles.focusBlock}
        style={{
          width: width * cellWidth,
        }}
        onChange={onChangeHandler}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        <input
          defaultValue={cell.isExpression ? `=${cell.expression}` : cell.value}
          autoFocus
          type="text"
          className={styles.editingBorderTextContent}
          onBlur={onBlurHandler}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              onUpdateHandler(ev);
            }
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sheets: state.sheets,
});

export default connect(mapStateToProps)(EditingCell);
