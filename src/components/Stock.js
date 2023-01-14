

function Stock({stock}) {
    return (
      <div className="stockMain">
  
        <div className = "stockTitle">Stock Name</div>
        <div className = "stockContent">{stock.name}</div>

        <div className = "stockTitle">Current stock price</div>
        <div className = "stockContent">{stock.curPrice}</div>

        <div className = "stockTitle">Industry</div>
        <div className = "stockContent">{stock.industry}</div>

        <div className = "stockTitle">Key metrics</div>
        <div className = "stockContent">{stock.metrics[0][0]}</div>
        <div className = "stockContent">{stock.metrics[0][1]}</div>
        

      </div>
    );
  }
  
  export default Stock;