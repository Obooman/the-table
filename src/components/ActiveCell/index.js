import React from "react";
import EditingCell from "./EditingCell";
import FocusCell from "./FocusCell";
import { connect } from "react-redux";
import { modes } from "../../models/editor";
import styles from "./main.module.css";

export const ActiveCell = ({
  dispatch,
  focusCell: { row, col },
  mode,
  cellSize,
}) => {
  const style = { left: col * cellSize[0], top: row * cellSize[1] };
  if (mode === modes.focused) {
    return (
      <div
        onDoubleClick={(ev) => {
          dispatch.editor.updateMode(modes.editing);
        }}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
        className={styles.activeCellWrapper}
        style={style}
      >
        <FocusCell row={row} col={col} />
      </div>
    );
  }

  if (mode === modes.editing) {
    return (
      <div className={styles.activeCellWrapper} style={style}>
        <EditingCell
          row={row}
          col={col}
          onBlur={() => {
            dispatch.editor.updateMode(modes.focused);
          }}
        />
      </div>
    );
  }

  return null;
};

const mapStateToProps = (state) => ({
  sheets: state.sheets,
  mode: state.editor.mode,
  focusCell: state.editor.focusCell,
  cellSize: [state.editor.cell.width, state.editor.cell.height],
});

export default connect(mapStateToProps)(ActiveCell);
