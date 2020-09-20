import React from "react";
import { connect } from "react-redux";
import styles from "./main.module.css";

export function Cell({
  relative: { row, column },
  absolute: { row: absRow, column: absColumn },
  sheets,
}) {
  const rowData = sheets.rows[absRow] || {};
  const cell = rowData[absColumn] || {};
  const value = "value" in cell ? cell.value : "";
  return (
    <div
      className={styles.cell}
      key={`${row}-${column}`}
      style={{
        left: column * 60,
        top: row * 20,
      }}
    >
      {value}
    </div>
  );
}

const mapStateToProps = (state) => ({
  sheets: state.sheets,
});

export default connect(mapStateToProps)(Cell);
