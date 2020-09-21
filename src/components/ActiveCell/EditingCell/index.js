import React, { useEffect, useState } from "react";
import stringCalc from "../../../utils/stringCalc";
import { isVariable, getVariableValue } from "../../../utils/getVariable";
import { isFunction, getFunction } from "../../../utils/getFunctions";
import getTextLength from "../../../utils/getTextLength";
import styles from "../main.module.css";
import canBeNumber from "../../../utils/canBeNumber";
import { connect } from "react-redux";
import { modes } from "../../../models/editor";

const errorInfo = "#ERROR";

export const EditingCell = ({
  dispatch,
  onBlur,
  sheets,
  row,
  col,
  cellSize,
}) => {
  const rowData = sheets.rows[row] || {};
  const cell = rowData[col] || {
    expression: "",
    value: "",
  };

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      Math.max(
        1,
        width,
        Math.ceil(getTextLength(cell.expression || cell.value) / cellSize[0])
      )
    );
  }, [cell, cellSize, width]);

  const onChangeHandler = (ev) => {
    const data = ev.target.value;

    if (getTextLength(data) > width * cellSize[0]) {
      console.log(width);
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
        result = errorInfo;
      }
    } else {
      result = data;
    }

    let value = result;

    if (isExpression && result !== errorInfo) {
      value = Number(value);
    }

    if (!isExpression && canBeNumber(value)) {
      value = Number(value);
    }

    dispatch.sheets.updateValue({
      row,
      value,
      expression,
      column: col,
      isExpression,
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
          width: width * cellSize[0],
          height: cellSize[1],
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

            if (ev.key === "Escape") {
              onUpdateHandler(ev);
              dispatch.editor.updateMode(modes.focused);
            }
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sheets: state.sheets,
  cellSize: [state.editor.cell.width, state.editor.cell.height],
});

export default connect(mapStateToProps)(EditingCell);
