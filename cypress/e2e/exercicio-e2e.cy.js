/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('.icon-user-unfollow').click() // Entre na página de login
        cy.login(perfil.usuario,perfil.senha) // Faça login
        cy.contains('Olá').should('exist') // Verifique se o login foi feito
        

    });


})
