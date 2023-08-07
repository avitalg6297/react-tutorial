import React from "react";
import changeHistoryOrder from "../../service/changeHistoryOrder";

function HistoryOrder({historyDirection, setHistoryDirection}) {
    //const
    let message = "sort history in other direction";

    return (
      < button className="historyOrder" onClick={() => changeHistoryOrder(historyDirection, setHistoryDirection)} >
        {message}
      </button >
    );
  }

  export default HistoryOrder;
