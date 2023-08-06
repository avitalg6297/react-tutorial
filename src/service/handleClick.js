import calculateWinner from "./calculateWinner";
import handlePlay from "./handlePlay";

function handleClick(i, setLastMoveRowIndex,setLastMoveColIndex,squares,squaresByIndexes, xIsNext, history, setHistory, currentMove, setCurrentMove) {

    setLastMoveColIndex(squaresByIndexes[i].col);
    setLastMoveRowIndex(squaresByIndexes[i].row);
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    handlePlay(nextSquares,  history, setHistory, currentMove, setCurrentMove);
  }

  export default handleClick;