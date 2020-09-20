import React from "react";
import { connect } from "react-redux";

export function Cell({ col, row, sheets }) {
  const rowData = sheets.rows[row] || {};
  const cell = rowData[col] || {};
  return <div>{cell.value || ""}</div>;
}

const mapStateToProps = (state) => ({
  sheets: state.sheets,
});

export default connect(mapStateToProps)(Cell);
