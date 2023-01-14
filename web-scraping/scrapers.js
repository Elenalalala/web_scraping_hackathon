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

    await page.waitForXPath('//*[@id="Col1-3-Financials-Proxy"]/section/div[2]/h3/span');
    const [el] = await page.$x('//*[@id="Col1-3-Financials-Proxy"]/section/div[2]/h3/span');
    
    const text = await el.getProperty('textContent');
    const srcText = await text.jsonValue();

    console.log({srcText});

    await browser.close();
}

scrapeProduct("https://finance.yahoo.com/quote/AAPL/financials/");