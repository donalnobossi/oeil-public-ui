import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true, // Optional: makes test APIs global
    environment: 'jsdom', // Use JSDOM for browser-like environment
    setupFiles: ['./src/setupTests.ts'], // or './vitest.setup.ts'
    coverage: {
      // Use the V8 provider for fast coverage collection
      provider: 'v8',
      // Reporters to generate (text output, lcov for CI and html for local inspection)
      reporter: ['text', 'lcov', 'html'],
      // Directory where coverage reports will be written
      reportsDirectory: 'coverage',
      // Include project sources for coverage
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      // Exclude tests, setup files, and build/artifacts
      exclude: [
        '**/*.d.ts',
        'src/setupTests.*',
        'src/**/*.test.*',
        'src/main.*',
        'src/vitest.config.*',
        'src/**/__tests__/**',
        'node_modules/**',
      ],
      thresholds: {
        // Enforce minimum thresholds (optional)
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      }
    }
  }
}))