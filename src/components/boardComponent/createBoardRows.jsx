import React from "react";
import calculateWinner from "../../service/calculateWinner";
import createSquare from "../squareComponent/createSquare";
import handleClick from "../../service/handleClick";


let squaresByIndexes = new Array();

function createBoardRows(size, squares, xIsNext, onPlay, setLastMoveRowIndex, setLastMoveColIndex) {
    const winningSquares = calculateWinner(squares).lines;
    const board = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        const squareNumber = i * size + j;

        let squareByIndex = {
          number: squareNumber,
          row: i,
          col: j
        };

        squaresByIndexes.push(squareByIndex);
        if (winningSquares != undefined && winningSquares.includes(squareNumber)) {
          row.push(createSquare(i * size + j, true, handleClick,onPlay, setLastMoveRowIndex,setLastMoveColIndex,squares,squaresByIndexes, xIsNext));
        } else {
          row.push(createSquare(i * size + j, false, handleClick,onPlay, setLastMoveRowIndex,setLastMoveColIndex,squares,squaresByIndexes, xIsNext));
        }

      }
      board.push(
        <div className="board-row">
          {row}
        </div>
      )
    }
    return board;
  }

  export default createBoardRows;