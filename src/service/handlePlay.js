import React from "react";

function handlePlay(nextSquares, history, currentMove,setHistory,setCurrentMove) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
}

export default handlePlay;