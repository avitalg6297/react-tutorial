import fillhistoricMovesIndexes from "./fillHistoricMovesIndexesArray";

function setDescriptionForMovesList(
  move,
  currentMove,
  lastMoveIndex,
  historicMovesIndexes,
  description
) {
  let row = lastMoveIndex.row;
  let col = lastMoveIndex.col;

  if (move === currentMove) {
    fillhistoricMovesIndexes(lastMoveIndex, historicMovesIndexes, move);
    description =
      "You are now at move #" + (move + 1) + " at " + row + "," + col;
  } else if (move > 0) {
    description =
      "Go to move #" +
      (move + 1) +
      " at " +
      historicMovesIndexes[move].lastMoveRowIndex +
      "," +
      historicMovesIndexes[move].lastMoveColIndex;
  } else {
    description = "Go to game start";
  }

  return description;
}

export default setDescriptionForMovesList;
