import React from "react";
import { InfiniteGrid } from "../InfiniteGrid";
import ActiveCell from "../ActiveCell";
import Cell from "../Cell";
import { connect } from "react-redux";
import { modes } from "../../models/editor";

export const DataTable = ({ dispatch, sheets }) => {
  return (
    <InfiniteGrid
      size={[1000, 1000]}
      cellSize={[60, 20]}
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
          row: parseInt(ev.nativeEvent.offsetY / 20),
          col: parseInt(ev.nativeEvent.offsetX / 60),
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
});

export default connect(mapStateToProps)(DataTable);
