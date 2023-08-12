import { useContext } from "react";
import { GameSettingContext } from "../../../gameContext";
import calculateWinner from "../../../service/calculateWinner";
import handlePlay from "../../../service/handlePlay";

export const useHandleClick = () => {
  const { history, setHistory, currentMove, setCurrentMove, setLastMoveIndex } =
    useContext(GameSettingContext);

  const handleClick = (i, squares, squaresByIndexes, xIsNext) => {
    setLastMoveIndex({
      row: squaresByIndexes[i].row,
      col: squaresByIndexes[i].col,
    });
    if (calculateWinner(squares).result == "winner" || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    handlePlay(nextSquares, history, setHistory, currentMove, setCurrentMove);
  };
  return { handleClick };
};
