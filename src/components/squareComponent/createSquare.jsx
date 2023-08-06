import React from "react";
import Square from "./square";
import { useContext } from "react";
import { GameSettingContext } from "../../gameContext";
import handleClick from "../../service/handleClick";

function CreateSquare(squareNumber,isWinningSquare,squares,squaresByIndexes, xIsNext) {
  const { history, setHistory, currentMove, setCurrentMove, setLastMoveRowIndex, setLastMoveColIndex } = useContext(GameSettingContext);
  return (
      <Square value={squares[squareNumber]} onSquareClick={() => handleClick(squareNumber, setLastMoveRowIndex,setLastMoveColIndex,squares,squaresByIndexes, xIsNext, history, setHistory, currentMove, setCurrentMove)} isWinningSquare={isWinningSquare} />
    )
  }

  export default CreateSquare;