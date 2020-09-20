import React, { useState } from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import { ActiveCell } from "../ActiveCell";
import Cell from "../Cell";
import { connect } from "react-redux";

export const DataTable = ({ dispatch }) => {
  const [position, changePosition] = useState([0, 0]);
  return (
    <InfiniteGrid
      size={[30, 80]}
      cellSize={[60, 20]}
      getData={(row, col) => {
        return <Cell row={row} col={col} />;
      }}
      onClick={(ev) => {
        changePosition([
          parseInt(ev.nativeEvent.offsetX / 60),
          parseInt(ev.nativeEvent.offsetY / 20),
        ]);
      }}
      theme={{
        isGrey: false,
      }}
      onScroll={(positionData) => {
        dispatch.editor.updateScrollPosition(positionData);
      }}
    >
      <div
        style={{
          position: "absolute",
          left: position[0] * 60,
          top: position[1] * 20,
        }}
      >
        <ActiveCell row={position[1]} col={position[0]} />
      </div>
    </InfiniteGrid>
  );
};

export default connect()(DataTable);
