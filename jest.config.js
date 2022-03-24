const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverageFrom: [
    "src/**/*.tsx",
    "src/**/*.ts",
    "!.next/**/*",
    "!coverage/**/*",
    "!jest.config.js",
    "!next.config.js",
    "!**/_app.tsx",
    "!**/theme.tsx",
    "!**/MapComponent.tsx",
    "!**/TrackForm.tsx",
    "!**/_document.tsx",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/store/index.ts",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
