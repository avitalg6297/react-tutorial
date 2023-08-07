function changeHistoryOrder(historyDirection, setHistoryDirection) {
    //what is 1 and 0 u use to set with it ?
    if (historyDirection === 0) {
      setHistoryDirection(1);
    } else {
      setHistoryDirection(0);
    }
  }
 export default changeHistoryOrder;
