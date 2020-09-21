import React from "react";
import { connect } from "react-redux";
import styles from "./main.module.css";

export function Cell({
  relative: { row, column },
  absolute: { row: absRow, column: absColumn },
  sheets,
  cellSize,
}) {
  const rowData = sheets.rows[absRow] || {};
  const cell = rowData[absColumn] || {};
  const value = "value" in cell ? cell.value : "";
  return (
    <div
      className={styles.cell}
      key={`${row}-${column}`}
      style={{
        left: column * cellSize[0],
        top: row * cellSize[1],
        width: cellSize[0],
        height: cellSize[1],
      }}
    >
      {value}
    </div>
  );
}

const mapStateToProps = (state) => ({
  sheets: state.sheets,
  cellSize: [state.editor.cell.width, state.editor.cell.height],
});

export default connect(mapStateToProps)(Cell);
