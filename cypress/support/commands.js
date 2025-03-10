// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
 require('cypress-file-upload');
 beforeEach(() => {
  cy.exec("mongo acebook_test --eval 'db.users.remove({})'");
  cy.exec("mongo acebook_test --eval 'db.posts.remove({})'");
  cy.exec("mongo acebook_test --eval 'db.likes.remove({})'");
  cy.exec("mongo acebook_test --eval 'db.comments.remove({})'");
});
