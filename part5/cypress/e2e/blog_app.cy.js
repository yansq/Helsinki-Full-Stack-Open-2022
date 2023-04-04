describe("Blog app", () => {
  beforeEach(() => {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
    const user = {
      username: "root",
      name: "root",
      password: "root",
    };
    cy.request("POST", `${Cypress.env("BACKEND")}/users`, user);
    cy.visit("");
  });

  it("Login form is shown", () => {
    cy.contains("username");
    cy.contains("password");
    cy.contains("login");
  });

  describe("Login", () => {
    it("succeeds with correct credentials", () => {
      cy.get("input:first").type("root");
      cy.get("input:last").type("root");
      cy.contains("login").click();
      cy.contains("root logged in");
    });

    it("fails with wrong credentials", () => {
      cy.get("input:first").type("root");
      cy.get("input:last").type("wrongPassword");
      cy.contains("login").click();
      cy.contains("wrong username or password");
    });
  });
});
