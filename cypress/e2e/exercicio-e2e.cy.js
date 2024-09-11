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
        /*Login*/
        cy.get('.icon-user-unfollow').click() // Entre na página de login
        cy.login(perfil.usuario,perfil.senha) // Faça login
        cy.contains('Olá').should('exist') // Verifique se o login foi feito

        /*Primeiro Produto*/
        cy.escolherEAddProdutoAoCarrinho(2, 32, 'Blue', 1)  //Acesse a página de produtos, selecione um e depois escolha uma cor, tamanho e quantidade para ele
        cy.contains('foi adicionado no seu carrinho').should('exist')

        /*Segundo Produto*/
        cy.escolherEAddProdutoAoCarrinho(8, 'S', 'Blue', 4) //Acesse a página de produtos, selecione o segundo e depois escolha uma cor, tamanho e quantidade para ele
        cy.contains('foram adicionados no seu carrinho').should('exist')

        /*Terceiro Produto*/
        cy.escolherEAddProdutoAoCarrinho(3, 'XL', 'Red', 2) //Acesse a página de produtos, selecione o terceiro e depois escolha uma cor, tamanho e quantidade para ele
        cy.contains('foram adicionados no seu carrinho').should('exist')

        /*Quarto Produto*/
        cy.escolherEAddProdutoAoCarrinho(1, 'M', 'Yellow', 1)
        cy.contains('foi adicionado no seu carrinho').should('exist')
    
        /*Carrinho e Checkout*/
        cy.get('.woocommerce-message > .button').click() // Clique em Ver carrinho
        cy.get('.checkout-button').click() //Clique em Concluir Compra


    });


})
