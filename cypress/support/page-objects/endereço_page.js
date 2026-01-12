class endereco{
    preencher_endereco({nome , sobrenome, empresa , email, cep , rua , informacao}){
        cy.contains("button","OK").click()
        cy.get('.fa-shopping-bag').first().click()
        cy.get('a[href="/checkout-one"]:visible').click()
        cy.get("#fname").type(nome)
        cy.get("#lname").type(sobrenome)
        cy.get("#cname").type(empresa)
        cy.get("#email").type(email)
        cy.get("#country").select("usa")
        cy.get("#city").select("Aland Islands")
        cy.get("#zip").type(cep)
        cy.get("#faddress").type(rua)
        cy.get("#messages").type(informacao)
        cy.get("#materialUnchecked").click()
        cy.contains("button","Save").click()
        cy.contains("button", "Place Order").click()
        cy.contains("Order success!").should("be.visible")
        

    }
}module.exports = new endereco()