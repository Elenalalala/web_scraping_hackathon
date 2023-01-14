import Stock from './Stock.js'

function StockBox({userPickedStocks}) {

    return (
        
        userPickedStocks.map((stock) => <Stock stock = {stock}/>)

    );
  }
  
  export default StockBox;