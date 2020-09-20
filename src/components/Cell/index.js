import React from "react";
import { connect } from "react-redux";

export function Cell({ col, row, sheets }) {
  const rowData = sheets.rows[row] || {};
  const cell = rowData[col] || {};
  const value = "value" in cell ? cell.value : "";
  return <div>{value}</div>;
}

const mapStateToProps = (state) => ({
  sheets: state.sheets,
});

export default connect(mapStateToProps)(Cell);
