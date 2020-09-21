import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import { numberToColumnString } from "../../utils/excelColumnStrNum";
import { connect } from "react-redux";
import styles from "./main.module.css";
import { sortModes } from "../../models/sorter";
import { tableSize } from "../../theTableConfig.json";

export const Columns = ({ scrollLeft, sortType, dispatch, cellSize }) => (
  <InfiniteGrid
    locked
    size={[tableSize[0], 1]}
    cellSize={cellSize}
    getData={({
      relative: { row, column },
      absolute: { column: absColumn },
    }) => {
      return (
        <span
          key={`${row}-${column}`}
          className={styles.columnTitle}
          style={{
            left: column * cellSize[0],
            top: row * cellSize[1],
            width: cellSize[0],
            height: cellSize[1],
          }}
          onClick={() => {
            dispatch.sorter.sort({ column: absColumn });
          }}
        >
          <span>
            {numberToColumnString(absColumn).toUpperCase()}
            <span className={styles.sort}>
              {sortType[absColumn]?.sortMode === sortModes.increase && "⬆"}
              {sortType[absColumn]?.sortMode === sortModes.decrease && "⬇"}
            </span>
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
  cellSize: [state.editor.cell.width, state.editor.cell.height],
});

export default connect(mapStateToProps)(Columns);
