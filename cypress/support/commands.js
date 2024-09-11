// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('escolherEAddProdutoAoCarrinho', (id, tamanho, cor, qtd) => {
    cy.get('#primary-menu > .menu-item-629 > a').click() // Acesse a página de produtos
    cy.get('.product-block').eq(id).click() // Escolha um produto
    cy.get('.variable-items-wrapper').find(`[data-wvstooltip="${tamanho}"]`).click(); //Escolha o tamanho dele
    cy.get('.variable-items-wrapper').find(`[data-wvstooltip="${cor}"]`).click(); //Escolha a cor dele
    cy.get('.input-text').clear().type(qtd) //Escolha a quantidade dele
    cy.get('.single_add_to_cart_button').click() //Clique em Comprar
});