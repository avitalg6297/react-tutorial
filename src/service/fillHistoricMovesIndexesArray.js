function fillhistoricMovesIndexes(lastMoveIndex, historicMovesIndexes, move) {
  let historicMoveIndex = {
    lastMoveColIndex: lastMoveIndex.col,
    lastMoveRowIndex: lastMoveIndex.row,
  };
  return historicMovesIndexes.splice(move, 0, historicMoveIndex);
}
export default fillhistoricMovesIndexes;
