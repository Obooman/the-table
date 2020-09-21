export default function getTableGrid(width, height, color) {
  return `repeating-linear-gradient(
  transparent 0px,
  transparent ${height - 1}px,
  ${color} ${height - 1}px,
  ${color} ${height}px
),
repeating-linear-gradient(
  90deg,
  transparent 0px,
  transparent ${width - 1}px,
  ${color} ${width - 1}px,
  ${color} ${width}px
)`;
}
