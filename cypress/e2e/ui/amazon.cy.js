/// <reference types="Cypress" />

describe('Fluxo de compra na Amazon', () => {
  beforeEach(() => {
    cy.visit_site("amazon")
  })

  it('Adicionar produtos no carrinho de compras', { tags : ['@ui','@amazon'] }, () => {
    cy.busca_produto('Echo dot')
    cy.adiciona_produto_carrinho()

    cy.busca_produto('Fire Tv Stick')
    cy.adiciona_produto_carrinho()

    cy.valida_valor_carrinho()
  })

  it('Criar nova conta', { tags : ['@ui','@amazon'] }, () => {
    cy.acessar_cadastro()
    cy.preencher_cadastro()
  })
})