function calculateWinner(squares, xIsNext) {

    let isDraw = true;
    let symbol = '';
    let currentSitutionResult = '';
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
  
    for(let i = 0; i < lines.length; i++){
      if (squares[i] === null) {
        isDraw = false;
      }
    }
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          result: 'winner',
          playerSymbol: squares[a],
          lines: lines[i],
          draw: false
        }
      }
    }


    if(isDraw){
      currentSitutionResult = 'draw';
      symbol =''
    }else{
      currentSitutionResult = 'nextPlayer'
      if(xIsNext){
        symbol= 'X'
      }else{
        symbol = 'O'
      }
    }

    return {
      result: currentSitutionResult,
      playerSymbol: symbol,
      lines: null
    }
  }
 
  export default calculateWinner;