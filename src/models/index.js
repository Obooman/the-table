import { init } from "@rematch/core";
import sheets from "./sheets";
import editor from "./editor";
import sorter from "./sorter";

const store = init({
  models: {
    sheets,
    editor,
    sorter,
  },
});

window.store = store;

export default store;
