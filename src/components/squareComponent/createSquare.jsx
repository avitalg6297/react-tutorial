import React from "react";
import Square from "./square";
import { useHandleClick } from "../../service/useHandleClick";

function CreateSquare(squareNumber,isWinningSquare,squares,squaresByIndexes, xIsNext) {
   // alt shift f 
   // use is a save word for hooks, its great to create a costum hooks but not in services 
   // CreateSquare is basiclly a warpper to Square componenet as i understood , is it required ? 
   let {handleClick} = useHandleClick();

  return (
      <Square value={squares[squareNumber]} onSquareClick={() => handleClick(squareNumber,squares,squaresByIndexes, xIsNext)} isWinningSquare={isWinningSquare} />
    )
  }

  export default CreateSquare;
