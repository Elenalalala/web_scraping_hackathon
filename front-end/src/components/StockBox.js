import Stock from './Stock.js'

function StockBox({userPickedStocks}) {

    return (
        <div style={{display: 'flex'}}> 
        {userPickedStocks ? userPickedStocks.map((stock) => <Stock stock = {stock}/>)  : ""}
       </div>

    );
  }
  
  export default StockBox;