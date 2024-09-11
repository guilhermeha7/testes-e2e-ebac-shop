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

//Acesse a página de produtos, selecione um produto e depois escolha uma cor, tamanho e quantidade para ele
Cypress.Commands.add('addProdutoAoCarrinho', (id, tamanho, cor, qtd) => {
    cy.get('#primary-menu > .menu-item-629 > a').click() // Acesse a página de produtos
    cy.get('.product-block').eq(id).click() // Escolha um produto
    cy.get('.variable-items-wrapper').find(`[data-wvstooltip="${tamanho}"]`).click(); //Escolha o tamanho dele
    cy.get('.variable-items-wrapper').find(`[data-wvstooltip="${cor}"]`).click(); //Escolha a cor dele
    cy.get('.input-text').clear().type(qtd) //Escolha a quantidade dele
    cy.get('.single_add_to_cart_button').click() //Clique em Comprar
});

Cypress.Commands.add('preencherCheckout', (nome, sobrenome, pais, rua, numeroRua, cidade, estado, cep, numeroTelefone, email) => {
    cy.get('#billing_first_name').clear().type(nome) // Digite o nome
    cy.get('#billing_last_name').clear().type(sobrenome) // Digite o sobrenome
    cy.get('#select2-billing_country-container').click().type(`${pais}{enter}`) //Digite o pais
    cy.get('#billing_address_1').clear().type(rua) // Digite a rua
    cy.get('#billing_address_2').clear().type(numeroRua) // Digite o número 
    cy.get('#billing_city').clear().type(cidade) // Digite a cidade
    cy.get('#select2-billing_state-container').click().type(`${estado}{enter}`) // Digite o estado
    cy.get('#billing_postcode').clear().type(cep) // Digite o CEP
    cy.get('#billing_phone').clear().type(numeroTelefone) // Digite o número de telefone
    cy.get('#billing_email').clear().type(email) // Digite o email
    cy.get('#terms').click() // Aceite os termos de serviço
    cy.get('#place_order').click() // Clique em "Finalizar Compra"
});