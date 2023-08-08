
function changeHistoryOrder(historyDirection, setHistoryDirection) {

  const historyOrderDirection = {
    ascending: 0,
    descending: 1
  }
    //what is 1 and 0 u use to set with it ?
    if (historyDirection === historyOrderDirection.ascending) {
      setHistoryDirection(historyOrderDirection.descending);
    } else {
      setHistoryDirection(historyOrderDirection.ascending);
    }
  }
 export default changeHistoryOrder;
