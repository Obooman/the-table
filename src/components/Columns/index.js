import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import { numberToColumnString } from "../../utils/excelColumnStrNum";
import { connect } from "react-redux";
import styles from "./main.module.css";
import { sortModes } from "../../models/sorter";

export const Columns = ({ scrollLeft, sortType, dispatch }) => (
  <InfiniteGrid
    size={[1000, 1]}
    cellSize={[60, 20]}
    getData={({
      relative: { row, column },
      absolute: { column: absColumn },
    }) => {
      return (
        <span
          key={`${row}-${column}`}
          className={styles.columnTitle}
          style={{
            left: column * 60,
            top: row * 20,
          }}
          onClick={() => {
            dispatch.sorter.sort({ column: absColumn });
          }}
        >
          {numberToColumnString(absColumn).toUpperCase()}
          <span className={styles.sort}>
            {sortType[absColumn]?.sortMode === sortModes.increase && "⬆"}
            {sortType[absColumn]?.sortMode === sortModes.decrease && "⬇"}
          </span>
        </span>
      );
    }}
    theme={{ isGrey: true, barless: true }}
    scrollLeft={scrollLeft}
  />
);

const mapStateToProps = (state) => ({
  scrollLeft: state.editor.scrollPosition.scrollLeft,
  sortType: state.sorter.sortType,
});

export default connect(mapStateToProps)(Columns);
