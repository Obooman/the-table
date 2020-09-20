import React from "react";
import styles from "../main.module.css";
import { connect } from "react-redux";

export const FocusCell = ({ sheets, row, col }) => {
  const rowData = sheets.rows[row] || {};
  const cell = rowData[col] || {};
  return <div className={styles.focusBlock}>{cell.value || ""}</div>;
};

const mapStateToProps = (state) => ({
  sheets: state.sheets,
});

export default connect(mapStateToProps)(FocusCell);
