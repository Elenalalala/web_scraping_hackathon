const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
// require executablePath from puppeteer
const {executablePath} = require('puppeteer');
puppeteer.use(pluginStealth());

async function scrapeProduct(url){
    const browser = await puppeteer.launch({
        // args: ['--no-sandbox',],
        headless: false,
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

    await browser.close();
}

scrapeProduct("https://www.marketwatch.com/investing/stock/aapl");
