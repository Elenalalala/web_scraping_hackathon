import React, { useState } from 'react';

function AddStock({userPickedStocks, stocksDatabase, updateUserPickedStocks, 
    displayedIndustries, updateDisplayedIndustries }) {
    

   async function addStock(stock){

    for (let i = 0; i < userPickedStocks.length; i++){

        await fetch("http://localhost:5001/update/:name", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify(userPickedStocks[i].name),
        })
            .catch(error => {
            window.alert(error);
            return;
        });
  
        // if (userPickedStocks[i].name === stock){
        //     setMessage(stock + " was previously added. Please choose another.");
        //     return;
        // }
    }

        for (let i = 0; i < stocksDatabase.length; i++){

            if (stocksDatabase[i].name === stock){

                var copyOfDisplayedIndustries = displayedIndustries;
                
                if (stocksDatabase[i].industry in copyOfDisplayedIndustries){
                    copyOfDisplayedIndustries[stocksDatabase[i].industry].push(stocksDatabase[i]);

                } else {
                    copyOfDisplayedIndustries[stocksDatabase[i].industry] = [stocksDatabase[i]];
                }

                updateDisplayedIndustries(copyOfDisplayedIndustries);
                updateUserPickedStocks(userPickedStocks =>[...userPickedStocks, stocksDatabase[i]]);
                setMessage(stock + " successfully added below.");
                console.log(displayedIndustries);
                return;

            }
        }
        
        console.log(userPickedStocks);
   }

   const [message, setMessage] = useState("");

    return (
      <div className="addStockMain">
  
        <div className="addStockTitle">

           
            <label>  <h9>Add stock to compare:  </h9> </label>

            <select name = "addStock" 
        onChange={e => addStock(e.target.value)}>
                <option></option>
                {stocksDatabase.map((stock) => <option>{stock.name}</option>)}
            </select>
                

        </div>

        <div className = "addStockMessage"> {message} </div>

      </div>
    );
  }

  
  export default AddStock;