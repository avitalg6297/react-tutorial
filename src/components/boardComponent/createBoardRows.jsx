import React from "react";
import calculateWinner from "../../service/calculateWinner";
import CreateSquare from "../squareComponent/createSquare";

let squaresByIndexes = new Array();

function CreateBoardRows(size, squares, xIsNext) {
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
          row.push  (CreateSquare(i * size + j, true, squares,squaresByIndexes, xIsNext));
        } else {
          row.push(CreateSquare(i * size + j, false, squares,squaresByIndexes, xIsNext));
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

  export default CreateBoardRows;