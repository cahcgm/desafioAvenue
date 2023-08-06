import { faker } from '@faker-js/faker'

let total = 0.0

Cypress.Commands.add('visit_site', (text) => {
    cy.visit(Cypress.config(`baseUrlui_${text}`))
})

Cypress.Commands.add('busca_produto', (product) => {
    cy.get('#twotabsearchtextbox').type(product)
    cy.get('#nav-search-submit-button').click()
    cy.get('span[data-component-type="s-search-results"]').should('be.visible')
})

Cypress.Commands.add('elementExists', (selector) => {
    return cy.window().then($window => $window.document.querySelector(selector));
  });

Cypress.Commands.add('adiciona_produto_carrinho', () => {
    cy.get('div[data-component-type="s-search-result"]').first().click()
    cy.get('#corePrice_feature_div').children('.a-section').children('.a-price').children('.a-offscreen').invoke('text').then((el) => {
        let value = parseFloat(el.replace('R$','').replace(',','.'))
        total += value
    })
    cy.get('#add-to-cart-button').click()

    cy.get('body').then($body => {
        if ($body.find('button[aria-label="Close"]').length) {
            cy.get('button[aria-label="Close"]').should('be.visible').click()
        }
    })
    cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').children('.a-size-medium-plus').contains('Adicionado ao carrinho')
})

Cypress.Commands.add('valida_valor_carrinho', () => {
    cy.get('#sw-gtc').should('be.visible').click()
    cy.get('#sc-subtotal-amount-buybox').children('span').invoke('text').then((el) => {
        let value = parseFloat(el.replace('R$','').replace(',','.'))
        expect(value).to.equal(parseFloat(total.toFixed(2)))
    })
})

Cypress.Commands.add('acessar_cadastro', () => {
    cy.get('#nav-signin-tooltip').children('.nav-signin-tooltip-footer').click()
})

Cypress.Commands.add('preencher_cadastro', () => {
    const password = faker.internet.password()

    cy.get('#ap_customer_name').type(faker.person.fullName())
    cy.get('#ap_email').type(faker.internet.email())
    cy.get('#ap_password').type(password)
    cy.get('#ap_password_check').type(password)
})