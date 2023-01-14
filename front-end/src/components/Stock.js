

function Stock({stock, userPickedStocks, idx, updateUserPickedStocks}) {

  function deleteStock(e){
    userPickedStocks.splice(idx, 1);
    updateUserPickedStocks(userPickedStocks =>[...userPickedStocks]);
    console.log(userPickedStocks);
  }

    return (
      <div className="stockMain">


  
        <div className = "stockTitle">Stock Name</div>
        <div className = "stockContent">{stock.name}</div>

        <div className = "stockTitle">Current stock price</div>
        <div className = "stockContent">{stock.curPrice}</div>

        <div className = "stockTitle">Industry</div>
        <div className = "stockContent">{stock.industry}</div>

        <div className = "stockTitle">Key metrics</div>
        <div className = "stockContent">{stock.metrics}</div>
        <div className = "stockContent">{stock.metrics}</div>
        
        <button className="deleteStock" onClick={deleteStock}>Remove</button>

      </div>
    );
  }
  
  export default Stock;