import puppeteer from "puppeteer";
import packageJson from "../../package.json"

// TODO: Viewport should be set via config
describe('Example test suite', function () {
    let browser;
    let page;
    let baseUrl = packageJson.config.testURL;

    beforeAll(async function () {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.setViewport({width: 1366, height: 768})
    })

    afterAll(() => browser.close());

    it ('Example test description', async function() {
        await page.goto(baseUrl, {waitUntil: 'networkidle0'})
        await expect(page).toMatch("MCL EDITOR")
        await expect(page).toMatch("Example Component")
    })
})
