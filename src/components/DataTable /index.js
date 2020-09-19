import React, { useState } from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import { ActiveCell } from "../ActiveCell";

export default () => {
  const [position, changePosition] = useState([0, 0]);
  return (
    <InfiniteGrid
      size={[100000000, 100000000]}
      cellSize={[60, 20]}
      onClick={(ev) => {
        console.log(ev.nativeEvent.offsetX);
        changePosition([
          parseInt(ev.nativeEvent.offsetX / 60),
          parseInt(ev.nativeEvent.offsetY / 20),
        ]);
      }}
      theme={{
        isGrey: false,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: position[0] * 60,
          top: position[1] * 20,
        }}
      >
        <ActiveCell />
      </div>
    </InfiniteGrid>
  );
};
