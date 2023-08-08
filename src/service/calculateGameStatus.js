import React from "react";
import { useMemo } from "react";
import calculateWinner from "./calculateWinner";

function calculateGameStatus(xIsNext, squares){

    let statusMessage
    let stausMessageDictionary = {'winner': "Winner: ", 'draw': "Draw", 'nextPlayer': "Next player: "};

    const gameCalculator = useMemo(() => calculateWinner(squares,xIsNext), [squares]);
   
      return stausMessageDictionary[gameCalculator.result] + gameCalculator.playerSymbol;
}

export default calculateGameStatus;