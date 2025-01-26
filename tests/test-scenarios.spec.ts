import { test, expect } from '@playwright/test';
import { moveToElement } from '../utils/helpers';

test.describe('Automation Testing Scenarios', () => {
  test('Scenario 1: Verify page loaded and interact with elements', async ({ page }) => {
    // Load the page
    await page.goto('https://automationintesting.online');
    await expect(page).toHaveTitle(/Restful-booker-platform demo/);

    // Verify "Let me hack!" button is enabled and click it
    const hackButton = page.locator('#collapseBanner > div > div:nth-child(3) > div.col-2.text-center > button');
    await hackButton.waitFor({ state: 'attached' });
    await expect(hackButton).toBeEnabled();
    //await moveToElement(page, '#collapseBanner > div > div:nth-child(3) > div.col-2.text-center > button');
    await hackButton.click();

    // Verify "Book this room" button is enabled and try booking
    const bookButton = page.locator('button:has-text("Book this room")').first();
    await bookButton.waitFor({ state: 'visible' });
    await expect(bookButton).toBeEnabled();
    //await moveToElement(page, '#root > div:nth-child(2) > div > div:nth-child(4) > div > div > div.col-sm-7 > button');
    await bookButton.click();

    // Fill out the booking form and submit
    // Fill Firstname
await page.locator('input[placeholder="Firstname"]').fill('John');

// Fill Lastname
await page.locator('input[placeholder="Lastname"]').fill('Doe');
await page.locator('input[placeholder="Lastname"]').evaluate((el) => el.blur()); // Blur Lastname field

// Move to Email field using Tab
await page.keyboard.press('Tab');

await page.locator('input[name="email"]').fill('john.doe@example.com'); 
// Fill Phone
await page.locator('input[class="form-control room-phone"]').fill('1234567890');

// Submit Booking
const bookingSubmitButton = page.locator('button[type="button"][class="btn btn-outline-primary float-right book-room"]');
await bookingSubmitButton.waitFor({ state: 'visible' });
await bookingSubmitButton.click();


    // Check for the error message
    const errorMessageLocator = page.locator('div.alert.alert-danger > p').nth(0);
    await errorMessageLocator.waitFor({ state: 'visible', timeout: 10000 });

// Validate the error message content
const errorMessageText = await errorMessageLocator.textContent();
console.log('Error Message:', errorMessageText); // Logs "must not be null"
expect(errorMessageText).toContain('must not be null');
  });

  test('Scenario 2: Fill out the contact form', async ({ page }) => {
    // Load the page and move to the contact form
    await page.goto('https://automationintesting.online');
    await moveToElement(page, '#root > div > div > div.row.contact > div:nth-child(2)');

    // Fill out the contact form
    await page.locator('#name').fill('John Doe');
    await page.locator('#email').fill('john.doe@example.com');
    await page.locator('#phone').fill('01524576584');
    await page.locator('#subject').fill('Test Inquiry');
    await page.locator('#description').fill('This is a test message-good.');

    // Submit the contact form
    const submitButton = page.locator('#submitContact');
    await moveToElement(page, '#submitContact');
    await submitButton.click();

    // Verify success message or form behavior
    // Adjust locator based on the actual behavior
    await expect(page.locator('#root > div > div > div.row.contact > div:nth-child(2) > div > h2')).toBeVisible();
  });
});