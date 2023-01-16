import Stock from './Stock.js'

function StockBox({userPickedStocks, updateUserPickedStocks, 
  displayedIndustries, updateDisplayedIndustries}) {

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}> 



        {userPickedStocks ? userPickedStocks.map((stock, idx) => 
        <Stock stock = {stock} userPickedStocks = {userPickedStocks} 
        updateUserPickedStocks = {updateUserPickedStocks} displayedIndustries = {displayedIndustries}
        updateDisplayedIndustries = {updateDisplayedIndustries}
        idx = {idx}/>)  : ""}
       
       
       
       </div>

    );
  }
  
  export default StockBox;