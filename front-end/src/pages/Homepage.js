

import StockBox from '../components/StockBox.js'
import AddStock from '../components/AddStock.js'
import React, { useState } from 'react';

function Homepage() {

    const startUserPickedStocks = [

        {name: 'Apple', curPrice: 'USD1.00', industry: 'Technology', metrics: [['Sales growth', '50%']]},
        {name: 'Microsoft', curPrice: 'USD1.00', industry: 'Technology', metrics: [['Sales growth', '50%']]},
        {name: 'Google', curPrice: 'USD1.00', industry: 'Technology', metrics: [['Sales growth', '50%']]},
     
    ]
   
     
    const stocksDatabase = [
        {name: 'Apple', curPrice: 'USD1.00', industry: 'Technology', metrics: [['Sales growth', '50%']]},
        {name: 'Microsoft', curPrice: 'USD1.00', industry: 'Technology', metrics: [['Sales growth', '50%']]},
        {name: 'Google', curPrice: 'USD1.00', industry: 'Technology', metrics: [['Sales growth', '50%']]},
        {name: 'Amazon', curPrice: 'USD1.00', industry: 'Technology', metrics: [['Sales growth', '50%']]},
        {name: 'Netflix', curPrice: 'USD1.00', industry: 'Technology', metrics: [['Sales growth', '50%']]},
        {name: 'Meta', curPrice: 'USD1.00', industry: 'Technology', metrics: [['Sales growth', '50%']]},

    ]
    
    const [userPickedStocks, updateUserPickedStocks] = useState(startUserPickedStocks)
    

    return (
    <div className="homepageMain">


    <AddStock userPickedStocks = {userPickedStocks} updateUserPickedStocks = {updateUserPickedStocks}
    stocksDatabase = {stocksDatabase}/>


    <div className="stockHomepage">

    <StockBox userPickedStocks = {userPickedStocks} updateUserPickedStocks = {updateUserPickedStocks}/>


    </div>
       

    </div>
  );
}

export default Homepage;
