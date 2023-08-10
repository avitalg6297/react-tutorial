




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
  let status = useMemo(() => calculateGameStatus(xIsNext, squares), [squares])
  const size = 3;
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

  let boardRows = board.map((_, rowInBoard) => {
    return (
      <div>
        {board[rowInBoard]}
      </div>
    )});

  return (
    <React.Fragment>
      <div className="status">{status}</div>
      {boardRows}
    </React.Fragment>
  );
}
export default Board;


// import React, { Fragment } from "react";
// import calculateWinner from "../../service/calculateWinner";
// import Square from "../squareComponent/square";
// import { useHandleClick } from "../../service/useHandleClick";

// import calculateGameStatus from "../../service/calculateGameStatus";

// let squaresByIndexes = new Array();

// function Board({ xIsNext, squares }) {

//   let { handleClick } = useHandleClick();
//   const winningSquares = calculateWinner(squares).lines;
//   const board = [];
//   let status = calculateGameStatus(xIsNext, squares)
//   const size = 3;
//   for (let i = 0; i < size; i++) {
//     let row = [];
//     for (let j = 0; j < size; j++) {
//       const squareNumber = i * size + j;

//       let squareByIndex = {
//         number: squareNumber,
//         row: i,
//         col: j
//       };

//       squaresByIndexes.push(squareByIndex);
//       if (winningSquares != undefined && winningSquares.includes(squareNumber)) {
//         row.push(
//           { squares: squares[i * size + j], onSquareClick: handleClick(i * size + j, squares, squaresByIndexes, xIsNext), isWinningSquare: true }
//           // <Fragment>
//           //   <Square value={squares[i * size + j]} onSquareClick={() => handleClick(i * size + j, squares, squaresByIndexes, xIsNext)} isWinningSquare={true} />
//           // </Fragment>
//         )
//       } else {
//         row.push(

//           { squares: squares[i * size + j], onSquareClick: handleClick(i * size + j, squares, squaresByIndexes, xIsNext), isWinningSquare: false }
//         )
//         // <Fragment>
//         //   <Square value={squares[i * size + j]} onSquareClick={() => handleClick(i * size + j, squares, squaresByIndexes, xIsNext)} isWinningSquare={false} />
//         // </Fragment>);
//       }

//     }


//     board.push(
//       row
//     )
//   }



//   return (
//     <React.Fragment>
//       <div className="status">{status}</div>
//       {board.map((row, _) => {
//         return (
//           <div>
//             <div className="board-row">
//               <Fragment>
//                 <Square value={row.squares} onSquareClick={row.onSquareClick} isWinningSquare={row.isWinningSquare} />
//               </Fragment>
//             </div>
//           </div>
//         )
//       })}
//     </React.Fragment>
//   );
// }
// export default Board;