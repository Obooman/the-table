import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import { connect } from "react-redux";
import styles from "./main.module.css";
import { tableSize } from "../../theTableConfig.json";

export const Rows = ({ scrollTop, cellSize }) => (
  <InfiniteGrid
    locked
    size={[1, tableSize[1]]}
    cellSize={cellSize}
    getData={({ relative: { row, column }, absolute: { row: absRow } }) => {
      return (
        <span
          className={styles.rowHeaderItem}
          key={`${row}-${column}`}
          style={{
            left: column * cellSize[0],
            top: row * cellSize[1],
            width: cellSize[0],
            height: cellSize[1],
          }}
        >
          <span>{absRow + 1}</span>
        </span>
      );
    }}
    theme={{
      barless: true,
      isGrey: true,
    }}
    scrollTop={scrollTop}
  />
);

const mapStateToProps = (state) => ({
  scrollTop: state.editor.scrollPosition.scrollTop,
  cellSize: [state.editor.cell.width, state.editor.cell.height],
});

export default connect(mapStateToProps)(Rows);
