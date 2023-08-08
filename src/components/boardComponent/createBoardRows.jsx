import React, { Fragment } from "react";
import calculateWinner from "../../service/calculateWinner";
import Square from "../squareComponent/square";
import { useHandleClick } from "../../service/useHandleClick";

let squaresByIndexes = new Array();

function CreateBoardRows(size, squares, xIsNext) {
  let { handleClick } = useHandleClick();
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
        row.push(
          <Fragment>
            <Square value={squares[i * size + j]} onSquareClick={() => handleClick(i * size + j, squares, squaresByIndexes, xIsNext)} isWinningSquare={true} />
          </Fragment>)
      } else {
        row.push(
          <Fragment>
            <Square value={squares[i * size + j]} onSquareClick={() => handleClick(i * size + j, squares, squaresByIndexes, xIsNext)} isWinningSquare={false} />
          </Fragment>);
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