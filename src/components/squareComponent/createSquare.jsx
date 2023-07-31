import React from "react";
import Square from "./square";

function createSquare(squareNumber,isWinningSquare, handleClick,onPlay, setLastMoveRowIndex,setLastMoveColIndex,squares,squaresByIndexes, xIsNext) {
    return (
      <Square value={squares[squareNumber]} onSquareClick={() => handleClick(squareNumber,onPlay, setLastMoveRowIndex,setLastMoveColIndex,squares,squaresByIndexes, xIsNext)} isWinningSquare={isWinningSquare} />
    )
  }

  export default createSquare;