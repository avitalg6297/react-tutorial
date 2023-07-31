import React from 'react';

function Square({ value, onSquareClick, isWinningSquare }) {
    let className = isWinningSquare ? "square-win" : "square";
    return (
      <button className={className} onClick={onSquareClick}>
        {value}
      </button>
    );
  }

  export default Square;