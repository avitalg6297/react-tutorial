import { useState } from 'react';
import React from 'react';
import historyOrder from './components/historyComponent/historyOrder';
import Board from './components/boardComponent/board';
import jumpTo from './components/jumpTo';

let historicMovesIndexes = new Array();

export default function Game() {
  const [lastMoveRowIndex, setLastMoveRowIndex] = useState(0);
  const [lastMoveColIndex, setLastMoveColIndex] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [historyDirection, setHistoryDirection] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  let moves = history.map((squares, move) => {
    let description;
    if (move === currentMove) {
      let historicMoveIndex = {
        lastMoveColIndex: lastMoveColIndex,
        lastMoveRowIndex: lastMoveRowIndex
      };
      historicMovesIndexes.splice(move, 0, historicMoveIndex);
      description = 'You are now at move #' + (move + 1) + " at " + lastMoveRowIndex + "," + lastMoveColIndex;
    }
    else if (move > 0) {
      description = 'Go to move #' + (move + 1) + " at " + historicMovesIndexes[move].lastMoveRowIndex + "," + historicMovesIndexes[move].lastMoveColIndex;
    } else {
      description = 'Go to game start';
    }
    return (
      <React.Fragment>
        <li key={move}>
          {move === currentMove &&
            <p>{description}</p>}
          {move !== currentMove &&
            <button onClick={() => jumpTo(move, setCurrentMove)}>{description}</button>}
        </li>
      </React.Fragment>
    );
  });

  if (historyDirection === 1) {
    moves.reverse();
  }


  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} setLastMoveRowIndex={setLastMoveRowIndex} setLastMoveColIndex={setLastMoveColIndex} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
        <ol>{historyOrder({historyDirection, setHistoryDirection})}</ol>
      </div>
    </div>
  );
}
