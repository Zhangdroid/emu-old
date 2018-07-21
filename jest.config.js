module.exports = {
  setupTestFrameworkScriptFile: "./configs/jest/setupTests.ts",
  moduleDirectories: ["node_modules", "src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  }
};
