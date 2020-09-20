import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import { connect } from "react-redux";

export const Rows = ({ scrollTop }) => (
  <InfiniteGrid
    size={[1, 80]}
    cellSize={[60, 20]}
    getData={(row, col) => {
      return row + 1;
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
