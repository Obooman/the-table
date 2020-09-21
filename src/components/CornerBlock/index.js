import React from "react";
import { connect } from "react-redux";
import styles from "./main.module.css";

export const CornerBlock = ({ cellSize }) => {
  return (
    <div className={styles.cornerBlock} style={{ height: cellSize[1] }}></div>
  );
};

const mapStateToProps = (state) => ({
  cellSize: [state.editor.cell.width, state.editor.cell.height],
});

export default connect(mapStateToProps)(CornerBlock);
