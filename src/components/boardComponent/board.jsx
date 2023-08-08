import React from "react";
import CreateBoardRows from "./createBoardRows";
import calculateGameStatus from "../../service/calculateGameStatus";

function Board({xIsNext, squares}) {
  //useMemo - why?
  //condititnal rendering - why?
  
  let status = calculateGameStatus(xIsNext, squares)

  return (
    <React.Fragment>
      <div className="status">{status}</div>
      {CreateBoardRows(3,squares, xIsNext)}
    </React.Fragment>
  );
}

export default Board;
