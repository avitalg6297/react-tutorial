import React from "react";
import changeHistoryOrder from "../../service/changeHistoryOrder";
import { GameSettingContext } from "../../gameContext";
import { useContext } from "react";
import movesList from "../movesList";
import setDescriptionForMovesList from "../../service/setDescriptionForMovesList";

let historicMovesIndexes = new Array();

function HistoryOrder({ historyDirection, setHistoryDirection }) {
  const historyOrderDirection = {
    ascending: 0,
    descending: 1,
  };

  const message = "sort history in other direction";

  const { history, currentMove, setCurrentMove, lastMoveIndex } =
    useContext(GameSettingContext);

  let moves = history.map((_, move) => {
    let description = setDescriptionForMovesList(
      move,
      currentMove,
      lastMoveIndex,
      historicMovesIndexes,
      description
    );
    return movesList(move, currentMove, description, setCurrentMove);
  });

  if (historyDirection === historyOrderDirection.descending) {
    moves.reverse();
  }

  return (
    <div className="game-info">
      <ol>{moves}</ol>
      <ol>
        <button
          className="historyOrder"
          onClick={() =>
            changeHistoryOrder(historyDirection, setHistoryDirection)
          }
        >
          {message}
        </button>
      </ol>
    </div>
  );
}

export default HistoryOrder;
