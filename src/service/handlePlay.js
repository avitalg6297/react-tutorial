function handlePlay(nextSquares, history, setHistory, currentMove, setCurrentMove){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
}

export default handlePlay;