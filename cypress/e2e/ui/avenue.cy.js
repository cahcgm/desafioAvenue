/// <reference types="Cypress" />

describe('Navegação área aberta portal Avenue', () => {
  beforeEach(() => {
    cy.visit_site("avenue")
    cy.acessar_tela_banking()
  })

  it('Acessar tela Banking', { tags : ['@ui','@avenue'] }, () => {
    cy.title().should('eq', 'Avenue Banking: abra sua conta Internacional')
    cy.get('.banking--hero-title').contains('Conta Internacional')
    cy.get('#newpage_banking_create_acc_hero').should('be.visible').contains('Abra sua conta agora')
  })

  it('Validar acessibilidade da tela Banking', { tags : ['@ui','@avenue'] }, () => {
    cy.injectAxe()
    cy.checkA11y(null, {
      includedImpacts: ['critical']
    })
  })

  it('Validar regressão visual na tela Banking', { tags : ['@ui','@avenue'] }, () => {
    // cy.get('.banking--section-two-image').first().matchImage()
  })
})