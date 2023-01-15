const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
// require executablePath from puppeteer
const {
  executablePath
} = require('puppeteer');
puppeteer.use(pluginStealth());

async function scrapeProduct(url) {
  const browser = await puppeteer.launch({
    // args: ['--no-sandbox',],
    // headless: false,
    ignoreHTTPSErrors: true,

    // add this
    executablePath: executablePath(),
  });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: 'networkidle0'
  });

  let allCategories = [];

  const urls = await page.evaluate(function(){
    const categories = document.querySelectorAll('body > div.pageFrame.navType-black.subType-unsubscribed > section.sector.cl_section > div > section > div.index-sector.border-box > ul > li > ul > li > a');
    let res = [];
    let catName = [];
    categories.forEach(element => {
      res.push(element.href);
      catName.push(element.textContent);
    });
    return [res, catName];
  });

  /* TODO */
  // searching for the right category 

  console.log(allCategories);
  //click to open the category
  let res = urls[0];
  let allName = urls[1];
  console.log(allName);
  let catIndex = 0;
  await page.goto(res[catIndex]);

  //going through each page of given category
  let hasNext = true;
  while(hasNext){
    const nextPage = await page.evaluate(function(){
      const nextBnt = document.querySelector('body > div.pageFrame.navType-black.subType-unsubscribed > section.sector.cl_section > div > section > div:nth-child(3) > ul > li.next');

      if(nextBnt.classList.contains('disabled')){
        hasNext = false;
        return false;
      }else{
        let next = nextBnt.querySelector('a');
        return next.href;
      }

    });

    console.log(nextPage);
    if(!nextPage) break;
    /* TODO */
    // searching for the company


    await page.goto(nextPage);
  }


  const companies = await page.evaluate(function(){
    const companyURL = document.querySelectorAll('body > div.pageFrame.navType-black.subType-unsubscribed > section.sector.cl_section > div > section > table > tbody > tr:nth-child(1) > td:nth-child(1) > a');
    let res = [];
    companyURL.forEach(element => {
      res.push(element.href);
    });
    return res;
  });
  console.log(companies[0]);
  //click on the first company link
  await page.goto(companies[0]);


  await page.waitForXPath('//*[@id="quote_val"]');
  const [el] = await page.$x('//*[@id="quote_val"]');

  const text = await el.getProperty('textContent');
  const srcText = await text.jsonValue();

  console.log({srcText});

  const [header] = await page.$x('//*[@id="root"]/div/div/div/div[3]/div/div/div[1]/div[1]/div[2]/h1');

  const name = await header.getProperty('textContent');
  const nameText = await name.jsonValue();

  sendToDatabase({nameText}.nameText,{srcText}.srcText,allName[catIndex],"not sure");

  await browser.close();
}

// This function will handle the submission.
async function sendToDatabase(name, price, industry, metrics) {
  const newPerson = {
    name: name,
    curPrice: price,
    industry: industry,
    metrics: metrics
  };
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



scrapeProduct("https://www.wsj.com/market-data/quotes/company-list/");