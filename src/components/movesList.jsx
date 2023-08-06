import React from "react";
import jumpTo from "../service/jumpTo";

function movesList(move, currentMove, description,setCurrentMove){
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
  }

export default movesList;