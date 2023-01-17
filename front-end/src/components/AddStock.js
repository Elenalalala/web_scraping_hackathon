import React, { useState } from 'react';

function AddStock({userPickedStocks, stocksDatabase, updateStocksDatabase, updateUserPickedStocks, 
    displayedIndustries, updateDisplayedIndustries }) {
    

    // const [curStockToAdd, updateCurrentStockToAdd] = useState({});

   async function addStock(stock){

    for (let i = 0; i < userPickedStocks.length; i++){

        if (userPickedStocks[i].name === stock){
            setMessage(stock + " was previously added. Please choose another.");
            return;
        }
    }

        for (let i = 0; i < stocksDatabase.length; i++){

            var curTicker = stocksDatabase[i].ticker;
            if (stocksDatabase[i].name === stock){

                await fetch(`http://localhost:5001/update/${curTicker}`, {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(stocksDatabase[i]),
                })
                .catch(error => {
                    window.alert(error);
                    return;
                });
                

                async function getRecords() {
                    const response = await fetch(`http://localhost:5001/record/${curTicker}`);
                
                    // if (!response.ok) {
                    //   const message = `An error occurred: ${response.statusText}`;
                    //   window.alert(message);
                    //   return;
                    // }
                
                    const records = await response.json();
                    console.log(records);
                    
                    return records;
                  }
                  
                  const curStockToAdd = await getRecords();
                  console.log(curStockToAdd);
                  var copyOfDisplayedIndustries = displayedIndustries;
                
                  if (curStockToAdd.industry in copyOfDisplayedIndustries){
                      copyOfDisplayedIndustries[curStockToAdd.industry].push(curStockToAdd);
  
                  } else {
                      copyOfDisplayedIndustries[curStockToAdd.industry] = [curStockToAdd];
                  }
  
                  updateDisplayedIndustries(copyOfDisplayedIndustries);
                  updateUserPickedStocks(userPickedStocks =>[...userPickedStocks, curStockToAdd]);
                  setMessage(stock + " successfully added below.");
                  console.log(displayedIndustries);
                  return;

                // var copyOfDisplayedIndustries = displayedIndustries;
                
                // if (stocksDatabase[i].industry in copyOfDisplayedIndustries){
                //     copyOfDisplayedIndustries[stocksDatabase[i].industry].push(stocksDatabase[i]);

                // } else {
                //     copyOfDisplayedIndustries[stocksDatabase[i].industry] = [stocksDatabase[i]];
                // }

                // updateDisplayedIndustries(copyOfDisplayedIndustries);
                // updateUserPickedStocks(userPickedStocks =>[...userPickedStocks, stocksDatabase[i]]);
                // setMessage(stock + " successfully added below.");
                // console.log(displayedIndustries);
                // return;

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