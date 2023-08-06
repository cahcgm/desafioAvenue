/// <reference types="Cypress" />

describe('Consultar clima na API do OpenWeather', () => {
    let locations = [
        {city:'Franca', state:'sp', country:'55'},
        {city:'Curitiba', state:'pr', country:'55'}
    ]

    locations.forEach(element => {
        it(`Consultar clima da cidade ${element.city}`, () => {
            cy.api_consultarClima(`${element.city}`,`${element.state}`,`${element.country}`,Cypress.config('api_key'))
            .then(response => {
                expect(response.status).to.equal(200)
                expect(response.body).not.to.be.null
                expect(response.body.name).to.equal(`${element.city}`)
            })
        })
    });
})