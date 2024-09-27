const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
//     const context = await browser.newContext();
//     const newPage = await context.newPage();
//     await newPage.goto('https://www.instagram.com/');
//     await expect(newPage).toHaveTitle(/Instagram/);
//    await page.locator('(//input[@class="_aa4b _add6 _ac4d _ap35"])[1]').type("8688634410");
//    await page.waitForTimeout(50000);
//await page.goto('https://www.flipkart.com/');
//await page.waitForLoadState(networkidle);
//const Tittle =await page.locator('//div[@class="_58bkzq63 _3n8fna1ac _3n8fnays _3n8fnan7 _3n8fna1 _3n8fnabm _58bkzq2 _1i2djtb9 _1i2djt0"]').allTextContents();

await page.goto("https://rahulshettyacademy.com/client");
await page.locator("#userEmail").fill(email);
await page.locator("#userPassword").type("Iamking@000");
await page.locator("[value='Login']").click();

  });

  // test('has title', async ({ page }) => {
  //   //     const context = await browser.newContext();
  //   //     const newPage = await context.newPage();
  //   //     await newPage.goto('https://www.instagram.com/');
  //   //     await expect(newPage).toHaveTitle(/Instagram/);
  //   //    await page.locator('(//input[@class="_aa4b _add6 _ac4d _ap35"])[1]').type("8688634410");
  //   //    await page.waitForTimeout(50000);
  //   await page.goto('https://www.flipkart.com/');
  //   const Tittle =await page.locator('//div[@class="_58bkzq63 _3n8fna1ac _3n8fnays _3n8fnan7 _3n8fna1 _3n8fnabm _58bkzq2 _1i2djtb9 _1i2djt0"]').allTextContents();
    
    
  //     });
