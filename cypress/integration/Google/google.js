// import { Given } from "cypress-cucumber-preprocessor/steps";

// const url = 'https://google.com'
// Given('I open Google page', () => {
//   cy.visit(url)
// })

let counter = 0;

Given("counter has been reset", () => {
  counter = 0;
});

When("counter is incremented", () => {
  counter += 1;
});

Then("counter equals {int}", value => {
  expect(counter).to.equal(value);
});

When("counter is incremented", () => {
    counter += 1;
  });

When("counter is incremented", () => {
    counter += 1;
  });

Then("counter equals {int}", value => {
    expect(counter).to.equal(value);
  });  