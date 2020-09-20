import React, { useState } from "react";
import EditingCell from "./EditingCell";
import FocusCell from "./FocusCell";
import { connect } from "react-redux";

export const ActiveCell = ({ dispatch, row, col }) => {
  const [editing, setEditing] = useState(false);
  return (
    <div>
      {editing ? (
        <EditingCell
          row={row}
          col={col}
          onBlur={() => {
            // dispatch.sheets.updateValue();
            setEditing(false);
          }}
        ></EditingCell>
      ) : (
        <div
          onDoubleClick={(ev) => {
            setEditing(true);
          }}
          onClick={(ev) => {
            ev.stopPropagation();
          }}
        >
          <FocusCell row={row} col={col} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sheets: state.sheets,
});

export default connect(mapStateToProps)(ActiveCell);
