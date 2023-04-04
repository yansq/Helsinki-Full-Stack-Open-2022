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

  describe("When logged in", () => {
    beforeEach(() => {
      cy.login({ username: "root", password: "root" });
    });

    it("A blog can be created", () => {
      cy.contains("new blog").click();
      cy.get("#title").type("test blog");
      cy.get("#author").type("test author");
      cy.get("#url").type("test url");
      cy.get("#create-blog-button").click();
      cy.contains("test blog");
    });

    it("A blog can be liked", () => {
      cy.contains("new blog").click();
      cy.get("#title").type("test blog");
      cy.get("#author").type("test author");
      cy.get("#url").type("test url");
      cy.get("#create-blog-button").click();
      cy.contains("show").click();
      cy.contains("like").click();
      cy.contains("like").parent().contains("1");
    });
  });
});
