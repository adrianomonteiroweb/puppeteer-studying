const puppeteer = require('puppeteer-extra');
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer.use(AdblockerPlugin());

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

    const videos = await page.$$('ytd-thumbnail.ytd-video-renderer');
    await videos[2].click();
    await page.waitForSelector('.html5-video-container');
    await page.waitFor(7000);
    await page.screenshot({ path: 'deschamps2.png' });
  })()
} catch (err) {
  console.error(err.message);
};
