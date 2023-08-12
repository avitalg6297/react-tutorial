import React, { Fragment } from "react";
import calculateWinner from "../../service/calculateWinner";
import Square from "../squareComponent/square";
import { useHandleClick } from "./hooks/useHandleClick";
import { useMemo } from "react";
import calculateGameStatus from "../../service/calculateGameStatus";

let squaresByIndexes = new Array();

function Board({ xIsNext, squares }) {
  let { handleClick } = useHandleClick();
  const winningSquares = calculateWinner(squares).lines;
  const board = [];
  let status = useMemo(() => calculateGameStatus(xIsNext, squares), [squares]);
  const size = 3;
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      const squareNumber = i * size + j;

      let squareByIndex = {
        number: squareNumber,
        row: i,
        col: j,
      };

      row.push({
        isWinningSquare:
          winningSquares != undefined && winningSquares.includes(squareNumber),
        value: squares[i * size + j],
        onSquareClick: () =>
          handleClick(i * size + j, squares, squaresByIndexes, xIsNext),
      });

      squaresByIndexes.push(squareByIndex);
    }

    board.push(row);
  }

  return (
    <React.Fragment>
      <div className="status">{status}</div>
      {board.map((row) => {
        return (
          <div className="board-row">
            {row.map((cell) => (
              <Fragment>
                <Square
                  value={cell.value}
                  onSquareClick={cell.onSquareClick}
                  isWinningSquare={cell.isWinningSquare}
                />
              </Fragment>
            ))}
          </div>
        );
      })}
    </React.Fragment>
  );
}
export default Board;
