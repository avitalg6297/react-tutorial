
function changeHistoryOrder(historyDirection, setHistoryDirection) {

  const historyOrderDirection = {
    ascending: 0,
    descending: 1
  }
    if (historyDirection === historyOrderDirection.ascending) {
      setHistoryDirection(historyOrderDirection.descending);
    } else {
      setHistoryDirection(historyOrderDirection.ascending);
    }
  }
 export default changeHistoryOrder;
