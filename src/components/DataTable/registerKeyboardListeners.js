import store from "../../models/index";
import { modes as editorModes } from "../../models/editor";

export default ([rows, columns]) => {
  document.addEventListener(
    "keydown",
    function (event) {
      const { key, code } = event;
      const { focusCell, mode } = store.getState().editor;

      if (/^Arrow\w+/.test(key)) {
        if (mode === editorModes.focused) {
          event.preventDefault();
          if (key === "ArrowUp") {
            if (focusCell.row > 0) {
              store.dispatch.editor.updateFocusCell({
                ...focusCell,
                row: focusCell.row - 1,
              });
            }
          } else if (key === "ArrowDown") {
            if (focusCell.row < rows - 1) {
              store.dispatch.editor.updateFocusCell({
                ...focusCell,
                row: focusCell.row + 1,
              });
            }
          } else if (key === "ArrowLeft") {
            if (focusCell.col > 0) {
              store.dispatch.editor.updateFocusCell({
                ...focusCell,
                col: focusCell.col - 1,
              });
            }
          } else if (key === "ArrowRight") {
            if (focusCell.col < columns - 1) {
              store.dispatch.editor.updateFocusCell({
                ...focusCell,
                col: focusCell.col + 1,
              });
            }
          }
        }
      }

      console.log(event.code);
      if (/^space$/i.test(code)) {
        if (mode !== editorModes.editing) {
          event.preventDefault();
        }
      }
    },
    false
  );
};
