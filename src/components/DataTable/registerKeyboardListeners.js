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

      if (/^space$/i.test(code)) {
        if (mode !== editorModes.editing) {
          event.preventDefault();
        }
      }

      if (/backspace|delete/i.test(code)) {
        if (mode === editorModes.focused) {
          store.dispatch.sheets.updateValue({
            row: focusCell.row,
            column: focusCell.col,
            value: "",
            isExpression: false,
            expression: "",
          });
        }
      }

      if (
        /^Digit\d{1}|^Key[A-Z]+|Backquote|Slash|Backslash|Semicolon|BracketLeft|BracketRight|Comma|Period|Minus/.test(
          code
        ) &&
        !event.metaKey
      ) {
        if (mode === editorModes.focused) {
          event.preventDefault();
          store.dispatch.sheets.updateValue({
            row: focusCell.row,
            column: focusCell.col,
            value: key,
            isExpression: false,
            expression: "",
          });
          store.dispatch.editor.updateMode(editorModes.editing);
        }
      }

      if (/^Equal/.test(code)) {
        if (mode === editorModes.focused) {
          event.preventDefault();
          store.dispatch.sheets.updateValue({
            row: focusCell.row,
            column: focusCell.col,
            value: "",
            isExpression: true,
            expression: "",
          });
          store.dispatch.editor.updateMode(editorModes.editing);
        }
      }

      if (/KeyV/.test(code) && event.metaKey) {
        store.dispatch.editor.updateMode(editorModes.editing);
      }
    },
    false
  );
};
