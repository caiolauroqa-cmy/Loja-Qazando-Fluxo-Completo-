/// <reference types="cypress" />

import { DadosCadastro } from "../support/factories/dados_cadastro";
import dadosendereco from "../fixtures/dados.endereco.json"



const register = require("../support/page-objects/register_page")
const buy = require("../support/page-objects/buy_page")
const endereco = require("../support/page-objects/endereço_page")

beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit("https://automationpratice.com.br/register")
    
});

it('Deve cadastrar um novo usuário com sucesso, adicionar um item ao carrinho e finalizar a compra', () => {
    register.preenchercadastro(DadosCadastro())
    buy.adicionar_carrinho()
    endereco.preencher_endereco(dadosendereco)
});
