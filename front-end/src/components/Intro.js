


function Intro() {
    return (
      <div className = "introMain">

<div> 
    <div>
    <h13>Welcome budding investor!</h13>
    </div>
            <img src={require('../assets/InvestingBag.png')} />
                

         <div>
          <h10 >


            Investing can be complex. Financial sites are filled 
            with buckets of data which can be overwhelming for first time investors.
            </h10>
            <div>
           <h10>
            This tool helps you understand the basics of investing by distilling the key 
            metrics for each industry. 
            </h10>
            </div>

            <div>
            <h10>
            It helps you focus only on data that is important.
            </h10>
            </div>
            </div>
            </div>

            <br></br>



            <div>

            <div>
            <h11>
                To start, pick a stock from the dropdown menu above to see what some 
                of the key investing metrics are for a particular industry. 
            </h11>
            </div>
            <br></br>
            <div>
                
            <div className = "introThirdMain">
            <h12>
                In our opinion, all else equal:
                </h12>
                <div>
                <h12>
                1. Companies with lower price to book ratios have higher upside potential
                </h12>
                </div>
                <div>
                <h12>
                2. Companies with lower price to earnings ratios have higher upside potential 
               
                </h12>
                     </div>
                <div>
                <h12>
                3. Companies with higher return to assets percentages have higher upside potential 
                
            </h12>
            </div>
            </div>
            </div>
            </div>
  
  
      </div>
    );
  }
  
  export default Intro;