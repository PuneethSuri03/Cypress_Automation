const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    specPattern: 'cypress/e2e/**/*.js',
    viewportHeight: 667,
    viewportWidth: 375,
    testIsolation: false,
    responseTimeout: 60000,
    requestTimeout: 30000
  },
});
