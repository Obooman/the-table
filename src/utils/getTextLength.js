const ctx = document.createElement("canvas").getContext("2d");

export default function getTextLength(text) {
  ctx.font = "20px sans-serif";
  return ctx.measureText(text).width;
}

export const registerTextFont = () => {};
