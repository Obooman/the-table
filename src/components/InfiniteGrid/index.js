import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import styles from "./main.module.css";

export function InfiniteGrid({
  size,
  cellSize,
  getData,
  onClick,
  theme = {},
  scrollLeft = 0,
  scrollTop = 0,
  onScroll,
  children,
}) {
  const containerRef = useRef();
  const [position, updatePosition] = useState([0, 0]);
  const [contentSize, updateContentSize] = useState([0, 0]);
  const [maxPosition, setMaxPosition] = useState([0, 0]);

  useEffect(() => {
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    let contentBlockWidth = Math.ceil((width / cellSize[0]) * 2);
    let contentBlockHeight = Math.ceil((height / cellSize[1]) * 2);

    let restBlocksInX = size[0] % contentBlockWidth;
    let maxPositionX = parseInt(size[0] / contentBlockWidth);
    contentBlockWidth += restBlocksInX;

    let restBlocksInY = size[1] % contentBlockHeight;
    let maxPositionY = parseInt(size[1] / contentBlockHeight);
    contentBlockHeight += restBlocksInY;

    if (contentBlockWidth > size[0]) {
      contentBlockWidth = size[0];
      maxPositionX = 0;
    }
    if (contentBlockHeight > size[1]) {
      contentBlockHeight = size[1];
      maxPositionY = 0;
    }

    updateContentSize([contentBlockWidth, contentBlockHeight]);
    setMaxPosition([maxPositionX, maxPositionY]);
  }, [size, cellSize]);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const updateContentPanel = function () {
      const scrollTop = scrollContainer.scrollTop;
      const scrollLeft = scrollContainer.scrollLeft;
      const offsetWidth = (contentSize[0] / 2) * cellSize[0];
      const offsetHeight = (contentSize[1] / 2) * cellSize[1];

      const [x, y] = position;
      let needUpdate = false;
      let nextX = x;
      let nextY = y;

      if (parseInt(scrollLeft / offsetWidth) !== x) {
        if (nextX <= maxPosition[0]) {
          nextX = parseInt(scrollLeft / offsetWidth);
          needUpdate = true;
        }
      }

      if (parseInt(scrollTop / offsetHeight) !== y) {
        if (nextY <= maxPosition[1]) {
          nextY = parseInt(scrollTop / offsetHeight);
          needUpdate = true;
        }
      }

      if (needUpdate) {
        updatePosition([nextX, nextY]);
      }

      onScroll && onScroll({ scrollLeft, scrollTop });
    };

    scrollContainer.addEventListener("scroll", updateContentPanel, false);
    return () =>
      scrollContainer.removeEventListener("scroll", updateContentPanel, false);
  }, [contentSize, position, maxPosition, cellSize, onScroll]);

  const containerClassName = classnames({
    [styles.grey]: theme.isGrey,
    [styles.tableContainer]: true,
    [styles.barless]: theme.barless,
  });

  useEffect(() => {
    console.log(scrollLeft, scrollTop);
    containerRef.current.scrollLeft = scrollLeft;
    containerRef.current.scrollTop = scrollTop;
  }, [scrollLeft, scrollTop]);

  return (
    <div ref={containerRef} className={containerClassName}>
      <div
        style={{
          width: size[0] * cellSize[0],
          height: size[1] * cellSize[1],
          overflow: "hidden",
        }}
        onClick={onClick}
      >
        <div
          className={styles.tableContent}
          style={{
            width: contentSize[0] * cellSize[0],
            height: contentSize[1] * cellSize[1],
            left: ((position[0] * contentSize[0]) / 2) * cellSize[0],
            top: ((position[1] * contentSize[1]) / 2) * cellSize[1],
          }}
        >
          {Array.from({ length: contentSize[0] }).map((a, colIndex) => {
            return Array.from({ length: contentSize[1] }).map((a, rowIndex) => {
              return (
                <div
                  className={styles.cell}
                  style={{
                    left: colIndex * 60,
                    top: rowIndex * 20,
                  }}
                >
                  {getData(
                    (position[1] * contentSize[1]) / 2 + rowIndex,
                    (position[0] * contentSize[0]) / 2 + colIndex
                  )}
                </div>
              );
            });
          })}
        </div>
        {children}
      </div>
    </div>
  );
}
