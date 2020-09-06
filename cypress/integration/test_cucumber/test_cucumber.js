const { cyan } = require("color-name")
import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

Given("I open the RHCERT WUI", () => {
    cy.visit("http://10.65.211.20/login")
})

And("I enter username", () =>{
    cy.get(".pf-login-username-id").type("cert_ops_qe")
});

Then("I enter password", () =>{
    cy.get(".pf-login-password-id").type("redhat")
});

Then("I enter password", () =>{
    cy.get(".pf-login-password-id").type("redhat")
});

// Given("I Click on Login button", () =>{
//     cy.get(".pf-login-password-id").click()
// });