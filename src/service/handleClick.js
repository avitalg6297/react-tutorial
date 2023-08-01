import React from "react";
import calculateWinner from "./calculateWinner";

function handleClick(i,onPlay, setLastMoveRowIndex,setLastMoveColIndex,squares,squaresByIndexes, xIsNext,history, currentMove,setHistory,setCurrentMove) {

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
    onPlay(nextSquares, history, currentMove,setHistory,setCurrentMove);
  }

  export default handleClick;