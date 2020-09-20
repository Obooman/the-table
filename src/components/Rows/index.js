import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import { connect } from "react-redux";
import styles from "./main.module.css";

export const Rows = ({ scrollTop }) => (
  <InfiniteGrid
    size={[1, 80]}
    cellSize={[60, 20]}
    getData={(row, col) => {
      return (
        <span
          className={styles.rowHeaderItem}
          key={row + "-" + col}
          style={{
            left: col * 60,
            top: row * 20,
          }}
        >
          {row + 1}
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
});

export default connect(mapStateToProps)(Rows);
