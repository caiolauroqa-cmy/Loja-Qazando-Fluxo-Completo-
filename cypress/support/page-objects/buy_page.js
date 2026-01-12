class buy{
    adicionar_carrinho(){
cy.get('.swal2-confirm').click()
cy.scrollTo('top')
cy.get('header a[href="/shop"]').first().click({ force: true })
cy.get('a[href="/product-details-one/4"]').first().click({ force: true })
cy.get('select[name="product"]').first().select('xl', { force: true })
cy.get('.product-color-red').first().click({ force: true })
cy.get('i.fa-plus').click({ force: true })
cy.get('#product_single_one .links_Product_areas a').eq(0).click({ force: true })
}
} module.exports = new buy()