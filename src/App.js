import { useState } from 'react';
import React, { Component } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  function createSquare(i) {
    return (
      <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
    )
  }

  function createBoardRows(size) {
    const board = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(createSquare(i * size + j));
      }
      board.push(
        <div className="board-row">
          {row}
        </div>
      )
    }
    return board;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <React.Fragment>
      <div className="status">{status}</div>
      {createBoardRows(3)}
    </React.Fragment>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [historyDirection, setHistoryDirection] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  // const [reverseHistory, setReverseHistory] = useState([Array(9).fill(null)]);


  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // const prevHistory = [nextSquares,...history.slice(0, currentMove + 1)];
    setHistory(nextHistory);
    // setReverseHistory(prevHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  let moves = history.map((squares, move) => {
    let description;
    if (move === currentMove) {
      description = 'You are now at move #' + move;
    }
    else if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <React.Fragment>
        <li key={move}>
          {move === currentMove &&
            <p>{description}</p>}
          {move !== currentMove &&
            <button onClick={() => jumpTo(move)}>{description}</button>}
        </li>
      </React.Fragment>
    );
  });

  if (historyDirection === 1) {
    moves.reverse();
  }

  function changeHistoryOrder() {
    if (historyDirection === 0) {
      setHistoryDirection(1);
    } else {
      setHistoryDirection(0);
    }
  }


  function historyOrder() {
    let message = "sort history in other direction";
    return (
      < button className="historyOrder" onClick={() => changeHistoryOrder()} >
        {message}
      </button >
    );
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
        <ol>{historyOrder()}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
