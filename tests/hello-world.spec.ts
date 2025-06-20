import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
    await page.goto('https://www.desjardins.com/en.html');
    await page.locator('#onetrust-accept-btn-handler').click();
});

// test('successful login', async ({ page }) => {
//     await page.goto('https://practicetestautomation.com/practice-test-login/');
//     await page.locator('#username').fill('student');
//     await page.locator('#password').fill('Password123');
//     await page.locator('#submit').click();

//     await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
//     await expect(page.locator('h1')).toHaveText('Logged In Successfully');
// });

// test('failed login due to wrong username', async ({ page }) => {
//     await page.goto('https://practicetestautomation.com/practice-test-login/');
//     await page.locator('#username').fill('wrongStudent');
//     await page.locator('#password').fill('Password123');
//     await page.locator('#submit').click();

//     await expect(page.locator('#error')).toHaveText('Your username is invalid!');
// });

// test('failed login due to wrong password', async ({ page }) => {
//     await page.goto('https://practicetestautomation.com/practice-test-login/');
//     await page.locator('#username').fill('student');
//     await page.locator('#password').fill('Password321');
//     await page.locator('#submit').click();

//     await expect(page.locator('#error')).toHaveText('Your password is invalid!');
// });