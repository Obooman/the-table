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
  const [pageGrid, updatePageGrid] = useState([0, 0]);

  useEffect(() => {
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    let pageRestPixelsWidth = (size[0] * cellSize[0]) % width;
    let pageRestPixelsHeight = (size[1] * cellSize[1]) % height;

    let contentBlockWidth = (width * 2 + pageRestPixelsWidth) / cellSize[0];
    let contentBlockHeight = (height * 2 + pageRestPixelsHeight) / cellSize[1];

    updatePageGrid([width, height]);
    updateContentSize([contentBlockWidth, contentBlockHeight]);
  }, [size, cellSize]);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const updateContentPanel = function () {
      const { scrollTop, scrollLeft } = scrollContainer;

      let needUpdate = false;

      const [x, y] = position;
      const nextX = parseInt(scrollLeft / pageGrid[0]);
      const nextY = parseInt(scrollTop / pageGrid[1]);

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
  }, [contentSize, position, cellSize, onScroll, pageGrid]);

  const containerClassName = classnames({
    [styles.grey]: theme.isGrey,
    [styles.tableContainer]: true,
    [styles.barless]: theme.barless,
  });

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
            left: ((position[0] * contentSize[0]) / 2) * cellSize[0],
            top: ((position[1] * contentSize[1]) / 2) * cellSize[1],
          }}
        >
          {Array.from({ length: contentSize[0] }).map((a, colIndex) => {
            return Array.from({ length: contentSize[1] }).map((a, rowIndex) => {
              return getData(
                (position[1] * contentSize[1]) / 2 + rowIndex,
                (position[0] * contentSize[0]) / 2 + colIndex
              );
            });
          })}
        </div>
        {children}
      </div>
    </div>
  );
}
