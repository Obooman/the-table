import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";

export default () => (
  <InfiniteGrid
    size={[1, 200]}
    cellSize={[60, 20]}
    getData={(row, col) => {
      return 1;
    }}
    theme={{
      barless: true,
      isGrey: true,
    }}
  />
);
