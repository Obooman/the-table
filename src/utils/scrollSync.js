const channels = {};

export const directions = {
  x: "x",
  y: "y",
  both: "both",
};

export const syncToChannel = (element, channel) => {
  element.addEventListener("scroll", function (ev) {
    channels[channel].forEach(({ element, direction }) => {
      if (direction === directions.x || direction === directions.both) {
        element.scrollLeft = ev.target.scrollLeft;
      } else if (direction === directions.y || direction === directions.both) {
        element.scrollTop = ev.target.scrollTop;
      }
    });
  });
};

export const syncFromChannel = (element, { channel, direction }) => {
  if (!channels[channel]) {
    channels[channel] = [];
  }

  channels[channel].push({
    element,
    direction,
  });
};
