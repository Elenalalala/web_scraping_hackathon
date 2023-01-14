import React, { useState } from 'react';

function AddStock({userPickedStocks, stocksDatabase, updateUserPickedStocks}) {
    
   function addStock(stock){

    for (let i = 0; i < userPickedStocks.length; i++){

        if (userPickedStocks[i].name == stock){
            setMessage(stock + " was previously added. Please choose another.");
            return;
        }
    }

        for (let i = 0; i < stocksDatabase.length; i++){

            if (stocksDatabase[i].name == stock){
                updateUserPickedStocks(userPickedStocks =>[...userPickedStocks, stocksDatabase[i]])
                setMessage(stock + " successfully added below.");
            }
        }
        
        console.log(userPickedStocks);
   }

   const [message, setMessage] = useState("");

    return (
      <div className="addStockMain">
  
        <div className="addStockTitle">

           
            <label>  Add stock to compare </label>

            <select name = "addStock" 
        onChange={e => addStock(e.target.value)}>
                <option></option>
                {stocksDatabase.map((stock) => <option >{stock.name}</option>)}
            </select>
                

        </div>

        <div> {message} </div>

      </div>
    );
  }
  
  export default AddStock;