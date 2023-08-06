function fillhistoricMovesIndexes(lastMoveColIndex,lastMoveRowIndex, historicMovesIndexes, move) {
    let historicMoveIndex = {
        lastMoveColIndex: lastMoveColIndex,
        lastMoveRowIndex: lastMoveRowIndex
    };
    return historicMovesIndexes.splice(move, 0, historicMoveIndex);
}
export default fillhistoricMovesIndexes;