import fillhistoricMovesIndexes from "./fillHistoricMovesIndexesArray";

function setDescriptionForMovesList(
  move,
  currentMove,
  lastMoveColIndex,
  lastMoveRowIndex,
  historicMovesIndexes,
  description
) {
  if (move === currentMove) {
    fillhistoricMovesIndexes(
      lastMoveColIndex,
      lastMoveRowIndex,
      historicMovesIndexes,
      move
    );
    description =
      "You are now at move #" +
      (move + 1) +
      " at " +
      lastMoveRowIndex +
      "," +
      lastMoveColIndex;
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
