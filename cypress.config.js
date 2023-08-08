const { defineConfig } = require('cypress')
const { initPlugin } = require ('@frsource/cypress-plugin-visual-regression-diff/plugins')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);
    },
    baseUrlui_amazon: 'https://www.amazon.com.br/',
    baseUrlui_avenue: 'https://avenue.us/',
    baseUrlapi: 'https://api.openweathermap.org/',
    api_key: 'd57e7c4abbe31d28428060ef81c2abc3',
    env: {
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: false,
})