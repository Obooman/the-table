import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import ActiveCell from "../ActiveCell";
import Cell from "../Cell";
import { connect } from "react-redux";
import { modes } from "../../models/editor";
import registerKeyboardListeners from "./registerKeyboardListeners";
import { tableSize } from "../../theTableConfig.json";

registerKeyboardListeners(tableSize);

export const DataTable = ({ dispatch, sheets, cellSize }) => {
  return (
    <InfiniteGrid
      size={tableSize}
      cellSize={cellSize}
      getData={(position) => {
        const {
          relative: { row, column },
          absolute: { row: absRow, column: absColumn },
        } = position;
        if (sheets.rows?.[absRow]?.[absColumn]) {
          return <Cell key={`${row}-${column}`} {...position} />;
        }

        return null;
      }}
      onClick={(ev) => {
        dispatch.editor.updateFocusCell({
          row: parseInt(ev.nativeEvent.offsetY / cellSize[1]),
          col: parseInt(ev.nativeEvent.offsetX / cellSize[0]),
        });
        dispatch.editor.updateMode(modes.focused);
      }}
      theme={{
        isGrey: false,
      }}
      onScroll={(positionData) => {
        dispatch.editor.updateScrollPosition(positionData);
      }}
    >
      <ActiveCell />
    </InfiniteGrid>
  );
};

const mapStateToProps = (state) => ({
  sheets: state.sheets,
  cellSize: [state.editor.cell.width, state.editor.cell.height],
});

export default connect(mapStateToProps)(DataTable);
