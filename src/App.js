import { useState } from 'react';
import React from 'react';
import HistoryOrder from './components/historyComponent/historyOrder';
import Board from './components/boardComponent/board';
import { GameSettingContext } from './gameContext';
import movesList from './components/movesList';
import setDescriptionForMovesList from './service/setDescriptionForMovesList';

let historicMovesIndexes = new Array();

export default function Game() {
  const [lastMoveRowIndex, setLastMoveRowIndex] = useState(0);
  const [lastMoveColIndex, setLastMoveColIndex] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [historyDirection, setHistoryDirection] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const gameSettingValues = {
    history, setHistory, currentMove, setCurrentMove,setLastMoveRowIndex, setLastMoveColIndex
  };

  let moves = history.map((squares, move) => {
    let description = setDescriptionForMovesList(move,currentMove, lastMoveColIndex,lastMoveRowIndex, historicMovesIndexes, description)
    return (
      movesList(move, currentMove, description,setCurrentMove)
    );
  });

  if (historyDirection === 1) {
    moves.reverse();
  }

  return (
    <div className="game">
      <div className="game-board">
        <GameSettingContext.Provider value={gameSettingValues}>
          <Board xIsNext={xIsNext} squares={currentSquares}/>
        </GameSettingContext.Provider>
      </div>
      <div className="game-info">
        <ol>
          {moves}
        </ol>
        <ol>
          <HistoryOrder historyDirection = {historyDirection} setHistoryDirection = {setHistoryDirection} />
          </ol>
      </div>
    </div>
  );
}