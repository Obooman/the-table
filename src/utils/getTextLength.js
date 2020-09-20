const ctx = document.createElement("canvas").getContext("2d");

export default function getTextLength(text) {
  if (text === undefined) {
    return 0;
  }
  ctx.font = "16px sans-serif";
  return ctx.measureText(text).width;
}

export const registerTextFont = () => {};
