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

        /*Adição do Primeiro Produto ao Carrinho*/
        cy.addProdutoAoCarrinho(2, 32, 'Blue', 1)
        cy.contains('foi adicionado no seu carrinho').should('exist')

        /*Adição do Segundo Produto ao Carrinho*/
        cy.addProdutoAoCarrinho(6, 'M', 'Gray', 2)
        cy.contains('foram adicionados no seu carrinho').should('exist')

        /*Adição do Terceiro Produto ao Carrinho*/
        cy.addProdutoAoCarrinho(3, 'XL', 'Red', 2)
        cy.contains('foram adicionados no seu carrinho').should('exist')

        /*Adição do Quarto Produto ao Carrinho*/
        cy.addProdutoAoCarrinho(1, 'M', 'Yellow', 1)
        cy.contains('foi adicionado no seu carrinho').should('exist')
    
        /*Carrinho e Checkout*/
        cy.get('.woocommerce-message > .button').click() // Clique em Ver carrinho
        cy.get('.checkout-button').click() // Clique em Concluir Compra
        cy.preencherCheckout('Alváro','Pereira','Brasil','Rua Ewquejdwqiod','1000','São Paulo','São Paulo','01153000','911223344','alvaropereira@gmail.com')
        cy.contains('Seu pedido foi recebido').should('exist')
    });


})
