import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import styles from "./main.module.css";
import getTableGrid from "../../utils/getTableGrid";

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
  locked,
}) {
  const containerRef = useRef();
  const [position, updatePosition] = useState([0, 0]);
  const [contentSize, updateContentSize] = useState([0, 0]);
  const [gridSize, updateGridSize] = useState([0, 0]);
  const [maxPage, updateMaxPage] = useState([0, 0]);

  useEffect(() => {
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    const gridWidth = Math.ceil(width / cellSize[0]);
    const gridHeight = Math.ceil(height / cellSize[1]);

    let pageRestPixelsWidth = size[0] % gridWidth;
    let pageRestPixelsHeight = size[1] % gridHeight;

    const xAxisGrid = gridWidth * 2 > size[0] ? size[0] : gridWidth * 2;
    const yAxisGrid = gridHeight * 2 > size[1] ? size[1] : gridHeight * 2;

    let contentBlockWidth = xAxisGrid + pageRestPixelsWidth;
    let contentBlockHeight = yAxisGrid + pageRestPixelsHeight;

    let maxPageX = parseInt(size[0] / gridWidth) - 1;
    let maxPageY = parseInt(size[1] / gridHeight) - 1;

    if (maxPageX > 2) {
      maxPageX -= 1;
    }

    if (maxPageY > 2) {
      maxPageY -= 1;
    }

    updateGridSize([gridWidth, gridHeight]);
    updateContentSize([contentBlockWidth, contentBlockHeight]);
    updateMaxPage([maxPageX, maxPageY]);
  }, [size, cellSize]);

  useEffect(() => {
    const scrollContainer = containerRef.current;

    const updateContentPanel = function (ev) {
      const { scrollTop, scrollLeft } = scrollContainer;

      let needUpdate = false;

      const [x, y] = position;
      let nextX = parseInt(scrollLeft / (gridSize[0] * cellSize[0]));
      let nextY = parseInt(scrollTop / (gridSize[1] * cellSize[1]));

      nextX = nextX > maxPage[0] ? maxPage[0] : nextX;
      nextY = nextY > maxPage[1] ? maxPage[1] : nextY;

      if (nextX !== x) {
        needUpdate = true;
      }

      if (nextY !== y) {
        needUpdate = true;
      }

      if (needUpdate) {
        updatePosition([nextX, nextY]);
      }

      onScroll && onScroll({ scrollLeft, scrollTop });
    };

    scrollContainer.addEventListener("scroll", updateContentPanel, false);
    return () =>
      scrollContainer.removeEventListener("scroll", updateContentPanel, false);
  }, [contentSize, position, cellSize, onScroll, gridSize, maxPage]);

  const containerClassName = classnames({
    [styles.grey]: theme.isGrey,
    [styles.tableContainer]: true,
    [styles.barless]: theme.barless,
  });

  useEffect(() => {
    if (locked) {
      const updateContentPanel = (ev) => ev.preventDefault();
      containerRef.current.addEventListener(
        "mousewheel",
        updateContentPanel,
        false
      );
    }
  }, [locked]);

  useEffect(() => {
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
            left: position[0] * gridSize[0] * cellSize[0],
            top: position[1] * gridSize[1] * cellSize[1],
            backgroundImage: getTableGrid(...cellSize, "#d4d4d4"),
          }}
        >
          {Array.from({ length: contentSize[0] }).map((a, colIndex) => {
            return Array.from({ length: contentSize[1] }).map((a, rowIndex) => {
              return getData({
                relative: {
                  row: rowIndex,
                  column: colIndex,
                },
                absolute: {
                  row: position[1] * gridSize[1] + rowIndex,
                  column: position[0] * gridSize[0] + colIndex,
                },
              });
            });
          })}
        </div>
        {children}
      </div>
    </div>
  );
}
