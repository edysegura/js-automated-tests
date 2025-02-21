// @ts-check
import { test, expect } from '@playwright/test'

const baseURL = process.env.BASE_URL || 'http://localhost:3000'

test('has title', async ({ page }) => {
  await page.goto(baseURL)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Factorial Calculator/)
})

// test('get started link', async ({ page }) => {
//   await page.goto(baseURL)

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click()

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole('heading', { name: 'Installation' })
//   ).toBeVisible()
// })
