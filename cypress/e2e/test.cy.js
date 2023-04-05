{
  /* <reference types="cypress" /> */
}

describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("http://localhost:3000");
    // check url to be /auth
    cy.url().should("include", "/auth");
  });

  it("Sign up error password missmatch", () => {
    cy.visit("http://localhost:3000/auth");

    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="sign-up-button"]').click();
    cy.get("#\\:r2\\:").clear("simas");
    cy.get("#\\:r2\\:").type("simas");
    cy.get("#outlined-required").clear("kate@mail.com");
    cy.get("#outlined-required").type("kate@mail.com");
    cy.get("#\\:r4\\:").clear("1");
    cy.get("#\\:r4\\:").type("12345678!A");
    cy.get("#\\:r5\\:").clear("a");
    cy.get('[data-cy="sign-up-repeat-password"]').type("asdfghj");
    cy.get('[data-cy="sign-up-submit"]').click();
    // should contain error message
    cy.get('[data-cy="error-text"]').should(
      "contain",
      "Password must contain 8-16 characters, at least one uppercase letter, one lowercase letter and one number"
    );
    /* ==== End Cypress Studio ==== */
  });
});
