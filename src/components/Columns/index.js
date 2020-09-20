import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import { numberToColumnString } from "../../utils/excelColumnStrNum";
import { connect } from "react-redux";

export const Columns = ({ scrollLeft }) => (
  <InfiniteGrid
    size={[30, 1]}
    cellSize={[60, 20]}
    getData={(row, col) => {
      return numberToColumnString(col).toUpperCase();
    }}
    theme={{ isGrey: true, barless: true }}
    scrollLeft={scrollLeft}
  />
);

const mapStateToProps = (state) => ({
  scrollLeft: state.editor.scrollPosition.scrollLeft,
});

export default connect(mapStateToProps)(Columns);
