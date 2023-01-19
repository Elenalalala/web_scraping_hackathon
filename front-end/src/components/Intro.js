import './Intro.css';


function Intro() {
    return (
      <div className = "introMain">

<div> 
    <div>
    <h3 className='middleText'>Welcome budding investor!</h3>
    </div>
            <img src={require('../assets/InvestingBag.png')} alt="" />
                

         <div>
            <div>
          <h1>
            Investing can be complex. 
            </h1>
            </div>
            <h1>
            Financial sites are filled 
            with buckets of data which can be overwhelming for first time investors.
            </h1>
            <div>
           <h1>
            This tool helps you understand the basics of investing by distilling the key 
            metrics for each industry. 
            </h1>
            </div>

            <div>
            <h1>
            It helps you focus only on data that is important.
            </h1>
            </div>
            </div>
            </div>

            <br></br>



            <div>

            <div>
            <h2>
                To start, pick a stock from the dropdown menu above to see what some 
                of the key investing metrics are for a particular industry. 
            </h2>
            </div>
            <br></br>
            <div>
                
            <div className = "introThirdMain">
            <h3 className='middleText'>
                In our opinion, all else equal:
                </h3>
                <div>
                <h3 className='middleText'>
                1. Companies with lower price to book ratios have higher upside potential
                </h3>
                </div>
                <div>
                <h3 className='middleText'>
                2. Companies with lower price to earnings ratios have higher upside potential 
               
                </h3>
                     </div>
                <div>
                <h3 className='middleText'>
                3. Companies with higher return to assets percentages have higher upside potential 
                
            </h3>
            </div>
            </div>
            </div>
            </div>
  
  
      </div>
    );
  }
  
  export default Intro;