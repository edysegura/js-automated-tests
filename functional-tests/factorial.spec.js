// @ts-check
import { test, expect } from '@playwright/test'

const baseURL = process.env.BASE_URL || 'http://localhost:3000'

test('has title', async ({ page }) => {
  await page.goto(baseURL)
  await expect(page).toHaveTitle('Factorial Calculator')
})

test('calculates factorial of 5', async ({ page }) => {
  await page.goto(baseURL)
  await page.getByLabel('Number').fill('5')
  await page.getByRole('button', { name: 'Calculate' }).click()
  await expect(page.getByText('120')).toBeVisible()
})

test('should not calculate factorial of negative number', async ({ page }) => {
  await page.goto(baseURL)
  await page.getByLabel('Number').fill('-1')
  await page.getByRole('button', { name: 'Calculate' }).click()
  await expect(page.getByText('0')).toBeVisible()
})
