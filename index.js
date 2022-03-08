const puppeteer = require('puppeteer');

const screenshot = 'deschamps.png';

try {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://youtube.com');
  })()
} catch (err) {
  console.error(err);
};
