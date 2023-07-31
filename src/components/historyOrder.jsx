import React from "react";
import changeHistoryOrder from "./changeHistoryOrder";

function historyOrder(historyDirection, setHistoryDirection) {
    let message = "sort history in other direction";
    return (
      < button className="historyOrder" onClick={() => changeHistoryOrder({historyDirection, setHistoryDirection})} >
        {message}
      </button >
    );
  }

  export default historyOrder;