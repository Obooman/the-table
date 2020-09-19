import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import { numberToColumnString } from "../../utils/excelColumnStrNum";

export default () => (
  <InfiniteGrid
    size={[200, 1]}
    cellSize={[60, 20]}
    getData={(row, col) => {
      return 1;
    }}
    theme={{ isGrey: true, barless: true }}
  />
);
