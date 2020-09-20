import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import { numberToColumnString } from "../../utils/excelColumnStrNum";
import { connect } from "react-redux";
import styles from "./main.module.css";

export const Columns = ({ scrollLeft }) => (
  <InfiniteGrid
    size={[30, 1]}
    cellSize={[60, 20]}
    getData={(row, col) => {
      return (
        <span
          key={row + "-" + col}
          className={styles.columnTitle}
          style={{
            left: col * 60,
            top: row * 20,
          }}
        >
          {numberToColumnString(col).toUpperCase()}
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
