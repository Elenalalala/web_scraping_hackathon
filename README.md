# investing made simple.

## intro.
We created a tool to help budding investors with little-to-no financial background learn the fundamentals of investing. We used web scraping to extract important metrics from industry-standard web pages, stored the extracted data into a NoSQL database, and created an easy-to-use and simple interface to compare stocks within the same industry.

You can access the tool here: [link to be added]

## technologies.
- Front-end: React.js, HTML, CSS, Google fonts
- Back-end: Node.js, MongoDB
- Web-scraping: Node.js, Puppeteer
- Deployment: Netlify, Heroku

## key features.
- Developed a NoSQL database (MongoDB) to store data on stocks
- Implemented a web scraper that scraps financial data from the reputable Wall Street Journal Markets site to be populated into the database
- Implementated an algorithm within the web scraper to scrap for different key metrics depending on the industry of the stock
- Designed a user friendly and easy-to-use frontend interface that allows users to add and remove stocks of interest
- Implemented an algorithm to sort displayed stocks by industry for easy comparison
- Implemented a frontend interface that supports viewing on multiple window sizes

## how to use.
- Pick a stock from the dropdown menu at the top of the navigation bar
- Pick a second stock that is within the same industry as the first stock.
- Understand the key metrics that are being used by professional investors for the industry and compare between stocks
- Pick additional stocks as desired, or remove stocks as required.

## how to run the code locally.
After git cloning this repository, complete the following steps:

Front-end
1. Access the front-end folder in a new terminal window
2. Download all dependencies with "npm install"
3. Run the application with "npm start"
4. A localhost page would appear on your default browser

Back-end
1. Access the back-end folder in a new, separate terminal window
2. Download all dependencies with "npm install"
3. Run the application with "node server.js"
4. If successful, the message "Connected to MongoDB" would appear

Web-scraper
1. Access the back-end folder in a new, separate terminal window
2. Download all dependencies with "npm install"
3. Run the application with "node scrapers.js"
