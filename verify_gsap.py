import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Navigate to homepage
        await page.goto('http://localhost:3000')

        # Wait for loading screen to disappear, it takes slightly over 2000ms
        await page.wait_for_timeout(3500)

        # Take a screenshot
        await page.screenshot(path='/home/jules/verification/homepage_gsap.png')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
