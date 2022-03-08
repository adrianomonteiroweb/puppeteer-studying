const puppeteer = require('puppeteer');

const screenshot = 'deschamps.png';

try {
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://youtube.com');

    const input = await page.$('input[id="search"]');
    await input.type('Filipe Deschamps');
    await page.click('button#search-icon-legacy');
    await page.waitForSelector('ytd-thumbnail.ytd-video-renderer');
    await page.screenshot({ path: 'deschamps.png' });
  })()
} catch (err) {
  console.error(err.message);
};
