import React from "react";
import Square from "./square";
import { useHandleClick } from "../../service/useHandleClick";

function CreateSquare(squareNumber,isWinningSquare,squares,squaresByIndexes, xIsNext) {

   let {handleClick} = useHandleClick();

  return (
      <Square value={squares[squareNumber]} onSquareClick={() => handleClick(squareNumber,squares,squaresByIndexes, xIsNext)} isWinningSquare={isWinningSquare} />
    )
  }

  export default CreateSquare;