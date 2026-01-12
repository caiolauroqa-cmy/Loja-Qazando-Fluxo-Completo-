class register {
    preenchercadastro({nome,email,senha}){
        cy.get("#user").type(nome),
        cy.get("#email").type(email),
        cy.get("#password").type(senha),
        cy.get("#btnRegister").click()
    }
} module.exports =  new register()
