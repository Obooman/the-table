import React, { useState } from "react";
import { EditingCell } from "./EditingCell";
import { FocusCell } from "./FocusCell";

export const ActiveCell = () => {
  const [editing, setEditing] = useState(false);
  return (
    <div>
      {editing ? (
        <EditingCell
          onBlur={() => {
            setEditing(false);
          }}
        ></EditingCell>
      ) : (
        <div
          onDoubleClick={() => {
            setEditing(true);
          }}
        >
          <FocusCell />
        </div>
      )}
    </div>
  );
};
