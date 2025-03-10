const signUp = require('../support/signup_helper')
const signIn = require('../support/signin_helper')
const submitPost = require('../support/submitpost_helper')

describe("Timeline", () => {
  it("can submit posts, when signed in, and view them", () => {
    signUp("email@email.com", "password", "username");
    signIn("email@email.com", "password");
    submitPost("Hello, world!");
    cy.get(".post").should("contain", "Hello, world!");
  });
});
