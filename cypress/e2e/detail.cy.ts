// https://docs.cypress.io/api/introduction/api.html

describe("Detail page", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Observatoire de la nature sur une île isolée");
  });
});
