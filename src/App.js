import { useState } from "react";
import React from "react";
import HistoryOrder from "./components/historyComponent/historyOrder";
import Board from "./components/boardComponent/board";
import { GameSettingContext } from "./gameContext";

export default function Game() {
  const historyOrderDirection = {
    ascending: 0,
    descending: 1,
  };

  // const [lastMoveIndex, setLastMoveIndex] = useState({ row: 0, col: 0 });
  // setLastMoveIndex({ row: 3, ...lastMoveIndex });

  const [lastMoveRowIndex, setLastMoveRowIndex] = useState(0);
  const [lastMoveColIndex, setLastMoveColIndex] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [historyDirection, setHistoryDirection] = useState(
    historyOrderDirection.ascending
  );
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const gameSettingValues = {
    history,
    setHistory,
    currentMove,
    setCurrentMove,
    setLastMoveRowIndex,
    setLastMoveColIndex,
    lastMoveRowIndex,
    lastMoveColIndex,
  };

  return (
    <div className="game">
      <div className="game-board">
        <GameSettingContext.Provider value={gameSettingValues}>
          <Board xIsNext={xIsNext} squares={currentSquares} />
          <HistoryOrder
            historyDirection={historyDirection}
            setHistoryDirection={setHistoryDirection}
          />
        </GameSettingContext.Provider>
      </div>
    </div>
  );
}
