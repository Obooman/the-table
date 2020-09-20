import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import { numberToColumnString } from "../../utils/excelColumnStrNum";
import { connect } from "react-redux";
import styles from "./main.module.css";

export const Columns = ({ scrollLeft }) => (
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
        >
          {numberToColumnString(absColumn).toUpperCase()}
        </span>
      );
    }}
    theme={{ isGrey: true, barless: true }}
    scrollLeft={scrollLeft}
  />
);

const mapStateToProps = (state) => ({
  scrollLeft: state.editor.scrollPosition.scrollLeft,
});

export default connect(mapStateToProps)(Columns);
