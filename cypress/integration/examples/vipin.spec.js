const { cyan } = require("color-name")

describe("My Test suit", function(){
    it('test_case 1', function(){
        cy.visit("https://github.com")
        cy.title().should('eq', 'The world’s leading software development platform · GitHub')
    })
})
