Cypress.Commands.add('api_consultarLocalidade', (cityName, stateCode, countryCode, apikey) => {
    cy.request({
      method: 'GET',
      url: `${Cypress.config("baseUrlapi")}/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${apikey}`
    })
  })

Cypress.Commands.add('api_consultarClima', (cityName, stateCode, countryCode, apikey) => {
    cy.api_consultarLocalidade(cityName, stateCode, countryCode, apikey).then(res =>
        res.body.forEach(loc => cy.request({
        method: 'GET',
        url: `${Cypress.config("baseUrlapi")}/data/2.5/weather?lat=${loc.lat}&lon=${loc.lon}&appid=${apikey}`
      }))
    )
  })