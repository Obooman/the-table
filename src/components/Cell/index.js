import React from "react";
import { connect } from "react-redux";
import styles from "./main.module.css";

export function Cell({ col, row, sheets }) {
  const rowData = sheets.rows[row] || {};
  const cell = rowData[col] || {};
  const value = "value" in cell ? cell.value : "";
  return (
    <div
      className={styles.cell}
      key={row + "-" + col}
      style={{
        left: col * 60,
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
