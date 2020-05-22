module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.spec.json"
    }
  },
  moduleDirectories: [
    "./",
    "node_modules",
  ],
  setupFilesAfterEnv: [
    "./node_modules/@angular-builders/jest/dist/jest-config/setup.js",
    "./setupJest.ts"
  ],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest"
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|js)?(x)",
    "**/+(*.)+(spec|test).+(ts|js)?(x)"
  ],
  testEnvironment: "jest-environment-jsdom-fourteen",
  transformIgnorePatterns: ["node_modules/(?!@ngrx)"],
  collectCoverageFrom: [
    "projects/navigation/src/lib/**/*.ts",
    "!src/app/**/*.module.ts",
    "!src/app/**/*.array.ts",
    "!src/app/fragmentTypes.ts"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "src/app/*.{js}"],
  snapshotSerializers: [
    "jest-preset-angular/build/AngularSnapshotSerializer.js",
    "jest-preset-angular/build/HTMLCommentSerializer.js"
  ],
};
