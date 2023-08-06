import React from "react";
import calculateWinner from '../../service/calculateWinner';
import CreateBoardRows from "./createBoardRows";

function Board({xIsNext, squares}) {

  const winner = calculateWinner(squares).winner;
  const draw = calculateWinner(squares).draw;
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (draw) {
    status = 'Draw';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <React.Fragment>
      <div className="status">{status}</div>
      {CreateBoardRows(3,squares, xIsNext)}
    </React.Fragment>
  );
}

export default Board;