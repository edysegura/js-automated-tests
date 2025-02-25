import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    root: './app/js',
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: '../../coverage',
    },
  },
})
