const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
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