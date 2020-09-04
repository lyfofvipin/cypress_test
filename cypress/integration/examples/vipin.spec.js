const { cyan } = require("color-name")

describe("Test suit", function(){
    it('test 1', function(){
        cy.visit("https://github.com")
        cy.title().should('eq', 'The world’s leading software development platform · GitHub')
    })
})