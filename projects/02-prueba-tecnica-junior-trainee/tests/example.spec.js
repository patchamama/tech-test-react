// @ts-check
import { test, expect } from '@playwright/test'

const URL_LOCAL = 'http://localhost:5173'

test('Page has a paragraph with content', async ({ page }) => {
  await page.goto(URL_LOCAL)

  const paragraph = await page.getByRole('paragraph')

  // Expect the paragraph to be visible.
  await expect(paragraph).toBeVisible()
  await expect(paragraph).toBeDefined()
})

test('Image exist', async ({ page }) => {
  await page.goto(URL_LOCAL)

  const img = await page.getByRole('img')

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('img')).toBeVisible()
})
