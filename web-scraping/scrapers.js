const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
// require executablePath from puppeteer
const {executablePath} = require('puppeteer');
puppeteer.use(pluginStealth());

async function scrapeProduct(url){
    const browser = await puppeteer.launch({
        // args: ['--no-sandbox',],
        // headless: false,
        ignoreHTTPSErrors: true,
    
        // add this
        executablePath: executablePath(),
      });
    const page = await browser.newPage();
    await page.goto(url,{waitUntil: 'networkidle0'});

    await page.waitForXPath('//*[@id="maincontent"]/div[2]/div[3]/div/div[2]/h2/bg-quote');
    const [el] = await page.$x('//*[@id="maincontent"]/div[2]/div[3]/div/div[2]/h2/bg-quote');
    
    const text = await el.getProperty('textContent');
    const srcText = await text.jsonValue();

    console.log({srcText});


      // These methods will update the state properties.
    
    // This function will handle the submission.
    async function sendToDatabase() {
      const newPerson = {name: 'Check', curPrice: {srcText}.srcText, industry: 'technology', metrics: 'hello'};
      // When a post request is sent to the create url, we'll add a new record to the database.
    
      console.log(newPerson);
      await fetch("http://localhost:5001/record/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
      })
      .catch(error => {
        window.alert(error);
        return;
      });
    
    
    }

    sendToDatabase();

    await browser.close();
}

scrapeProduct("https://www.marketwatch.com/investing/stock/aapl");
