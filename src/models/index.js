import { init } from "@rematch/core";
import sheets from "./sheets";
import editor from "./editor";

const store = init({
  models: {
    sheets,
    editor,
  },
});

window.store = store;

export default store;
