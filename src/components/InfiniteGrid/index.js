import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import styles from "./main.module.css";

export function InfiniteGrid({
  size,
  cellSize,
  onClick,
  theme = {},
  children,
}) {
  const containerRef = useRef();
  const [position, updatePosition] = useState([0, 0]);
  const [contentSize, updateContentSize] = useState([0, 0]);

  useEffect(() => {
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    const contentBlockWidth = (width / cellSize[0]) * 2;
    const contentBlockHeight = (height / cellSize[1]) * 2;

    updateContentSize([contentBlockWidth, contentBlockHeight]);
  }, [size, cellSize]);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const updateContentPanel = function () {
      const scrollTop = scrollContainer.scrollTop;
      const scrollLeft = scrollContainer.scrollLeft;
      const offsetWidth = scrollContainer.offsetWidth;
      const offsetHeight = scrollContainer.offsetHeight;

      const [x, y] = position;
      let needUpdate = false;
      let nextX = x;
      let nextY = y;

      if (parseInt(scrollLeft / offsetWidth) !== x) {
        nextX = parseInt(scrollLeft / offsetWidth);
        needUpdate = true;
      }

      if (parseInt(scrollTop / offsetHeight) !== y) {
        nextY = parseInt(scrollTop / offsetHeight);
        needUpdate = true;
      }

      if (needUpdate) {
        updatePosition([nextX, nextY]);
      }
    };

    scrollContainer.addEventListener("scroll", updateContentPanel, false);
    return () =>
      scrollContainer.removeEventListener("scroll", updateContentPanel, false);
  }, [contentSize, position]);

  const containerClassName = classnames({
    [styles.grey]: theme.isGrey,
    [styles.tableContainer]: true,
    [styles.barless]: theme.barless,
  });

  return (
    <div
      ref={containerRef}
      className={containerClassName}
      style={{ overflow: "scroll", position: "relative" }}
    >
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
            position: "absolute",
            left: ((position[0] * contentSize[0]) / 2) * cellSize[0],
            top: ((position[1] * contentSize[1]) / 2) * cellSize[1],
          }}
        >
          {Array.from({ length: 100 }).map((a, colIndex) => {
            return (
              <div
                className={styles.cell}
                style={{
                  position: "absolute",
                  left: colIndex * 60,
                  top: 0 * 20,
                }}
              >
                ooo
              </div>
            );
          })}
        </div>
        {children}
      </div>
    </div>
  );
}
