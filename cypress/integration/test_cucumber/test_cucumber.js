const { cyan } = require("color-name")

Given("I open GitHub login page", () => {
    cy.visit("https://github.com/login")
})

And("I enter username", () =>{
    cy.xpath("//input[@id='login_field']").type("your_username")
});

Then("I enter password", () =>{
    cy.xpath("//input[@id='password']").type("your_password")
});

Then("I Click on Login button", () =>{
    cy.xpath("//input[@type='submit']").click()
});

Given("I am able to login", () =>{
    cy.xpath("//img[@alt='@your_username']").should('be.visible')
});