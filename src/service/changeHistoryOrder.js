function changeHistoryOrder(historyDirection, setHistoryDirection) {
    if (historyDirection === 0) {
      setHistoryDirection(1);
    } else {
      setHistoryDirection(0);
    }
  }
 export default changeHistoryOrder;