/* <reference types="cypress" /> */
// import cy from "cypress";

describe("Auth tests", () => {
  it("Checks if user cant access private routes without login", () => {
    cy.visit("http://localhost:3000/auth");
    cy.visit("http://localhost:3000");
    cy.url().should("include", "auth");
  });

  it("Sign up error password missmatch", () => {
    cy.visit("http://localhost:3000/auth");
    cy.get('[data-cy="sign-up-button"]').click();
    cy.get("#\\:r2\\:").clear("Dainora");
    cy.get("#\\:r2\\:").type("Dainora");
    cy.get("#outlined-required").clear("dainora@mail.com");
    cy.get("#outlined-required").type("dainora@mail.com");
    cy.get("#\\:r4\\:").clear("1");
    cy.get("#\\:r4\\:").type("12345678!A");
    cy.get("#\\:r5\\:").clear("a");
    cy.get('[data-cy="sign-up-repeat-password"]').type("asdfghj");
    cy.get('[data-cy="sign-up-submit"]').click();
    cy.get('[data-cy="error-text"]').should(
      "contain",
      "Password must contain 8-16 characters, at least one uppercase letter, one lowercase letter and one number"
    );
  });

  it("Fails to sign in", () => {
    cy.visit("http://localhost:3000/auth");
    cy.get('[data-cy="sign-in-email"]').type("test@mail.com");
    cy.get('[data-cy="sign-in-password"]').type("TestTest11");
    cy.get('[data-cy="sign-in-button"]').click();
    cy.url().should("eq", "http://localhost:3000/auth");
  });

  it("Successfully signs in", () => {
    cy.visit("http://localhost:3000/auth");
    cy.get('[data-cy="sign-in-email"]').type("test@mail.com");
    cy.get('[data-cy="sign-in-password"]').type("TestTest1");
    cy.get('[data-cy="sign-in-button"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Successfully navigates through the app", () => {
    cy.visit("http://localhost:3000/auth");
    cy.get('[data-cy="sign-in-email"]').type("test@mail.com");
    cy.get('[data-cy="sign-in-password"]').type("TestTest1");
    cy.get('[data-cy="sign-in-button"]').click();
    cy.get('[data-cy="nav-preferences-btn"]').click();
    cy.url().should("eq", "http://localhost:3000/preferences");
    cy.get('[data-cy="nav-saved-btn"]').click();
    cy.url().should("eq", "http://localhost:3000/saved");
    cy.get('[data-cy="nav-account-btn"]').click();
    cy.url().should("eq", "http://localhost:3000/my-account");
    cy.get('[data-cy="nav-home-btn"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Successfully signs out", () => {
    cy.visit("http://localhost:3000/auth");
    cy.get('[data-cy="sign-in-email"]').type("test@mail.com");
    cy.get('[data-cy="sign-in-password"]').type("TestTest1");
    cy.get('[data-cy="sign-in-button"]').click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.get('[data-cy="logout-btn"]').click();
    cy.url().should("eq", "http://localhost:3000/auth");
  });
});
