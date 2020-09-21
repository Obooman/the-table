import React from "react";
import styles from "../main.module.css";
import { connect } from "react-redux";
import classNames from "classnames";

export const FocusCell = ({ sheets, row, col, cellSize }) => {
  const className = classNames({
    [styles.cell]: true,
    [styles.focusBlock]: true,
  });
  const rowData = sheets.rows[row] || {};
  const cell = rowData[col] || {};
  const value = "value" in cell ? cell.value : "";
  return (
    <div
      className={className}
      style={{
        width: cellSize[0],
        height: cellSize[1],
      }}
    >
      {value}
    </div>
  );
};

const mapStateToProps = ({ sheets, editor }) => ({
  sheets,
  cellSize: [editor.cell.width, editor.cell.height],
});

export default connect(mapStateToProps)(FocusCell);
