import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the cucumber.js GitHub repository", () => {
  cy.visit("https://github.com/cucumber/cucumber-js");
});

When("I go to the README file", () => {
  cy.visit("https://github.com/cucumber/cucumber-js/blob/master/README.md");
});

Then("I should not see a {string} section", (title) => {
  cy.get("a")
    .find('[href="#' + title.toLowerCase() + '"]')
    .should("not.exist");
  cy.log("The " + title + " section was not found");
});

Then("I should see a {string} badge", (badge) => {
  cy.get('[alt="' + badge + '"] ').should("exist");
});

Then("I can see a {string} badge", (badge) => {
  cy.get(
    '[src="https://github.com/cucumber/cucumber-js/workflows/' +
      badge +
      '/badge.svg"] '
  ).should("exist");
});
