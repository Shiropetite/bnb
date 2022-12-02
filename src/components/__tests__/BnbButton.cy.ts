import BnbButton from "../BnbButton.vue";

describe("BnbButton", () => {
  it("renders a message", () => {
    const label = "Hello there";
    cy.mount(BnbButton, { props: { label } });

    cy.get(".bnb-button").should("contain", label);
  });

  it("should have an 'href' attribute", () => {
    const href = "https://www.google.fr/";
    cy.mount(BnbButton, { props: { href } });

    cy.get(".bnb-button").should("have.attr", "href", href);
  });

  it("should have an 'to' attribute", () => {
    const to = "/about";
    cy.mount(BnbButton, { props: { to } });

    cy.get(".bnb-button").should("have.attr", "to", to);
  });

  it("should have an 'target' attribute", () => {
    const target = "_blank";
    cy.mount(BnbButton, { props: { target } });

    cy.get(".bnb-button").should("have.attr", "target", target);
  });

  it("should contain an icon", () => {
    const icon = "/logo.svg";
    cy.mount(BnbButton, { props: { icon } });

    cy.get(".bnb-button").get("img").should("have.attr", "src", `/bnb${icon}`);
  });

  it("should contain two icons", () => {
    const icon = "/logo.svg";
    cy.mount(BnbButton, { props: { iconLeft: icon, iconRight: icon } });

    cy.get("img").should("have.attr", "src", `/bnb${icon}`);
    cy.get(".icon-right").should("have.attr", "src", `/bnb${icon}`);
  });

  it("should contain text and left icon", () => {
    const icon = "/logo.svg";
    const label = "Hello";
    cy.mount(BnbButton, { props: { iconLeft: icon, label } });

    cy.get(".icon-left").should("have.attr", "src", `/bnb${icon}`);
    cy.get(".bnb-button").should("contain", label);
  });

  it("should contain text and right icon", () => {
    const icon = "/logo.svg";
    const label = "Hello";
    cy.mount(BnbButton, { props: { iconRight: icon, label } });

    cy.get(".icon-right").should("have.attr", "src", `/bnb${icon}`);
    cy.get(".bnb-button").should("contain", label);
  });

  it("should have dark border", () => {
    cy.mount(BnbButton, { props: { border: "dark" } });

    cy.get(".bnb-button").should("have.class", "border-dark");
  });

  it("should have light border", () => {
    cy.mount(BnbButton, { props: { border: "light" } });

    cy.get(".bnb-button").should("have.class", "border-light");
  });

  it("should be small", () => {
    cy.mount(BnbButton, { props: { size: "sm" } });

    cy.get(".bnb-button").should("have.class", "button-sm");
  });

  it("should be large", () => {
    cy.mount(BnbButton, { props: { size: "lg" } });

    cy.get(".bnb-button").should("have.class", "button-lg");
  });

  it("should have a 'primary' color", () => {
    cy.mount(BnbButton, { props: { bgColor: "primary" } });

    cy.get(".bnb-button").should("have.class", "bg-primary");
  });

  it("should have a 'dark' color", () => {
    cy.mount(BnbButton, { props: { bgColor: "dark" } });

    cy.get(".bnb-button").should("have.class", "bg-dark");
  });

  it("should have a 'gradient' color", () => {
    cy.mount(BnbButton, { props: { bgColor: "gradient" } });

    cy.get(".bnb-button").should("have.class", "bg-gradient");
  });

  it("should be rounded", () => {
    cy.mount(BnbButton, { props: { rounded: true } });

    cy.get(".bnb-button").should("have.class", "rounded");
  });

  it("should be round", () => {
    cy.mount(BnbButton, { props: { round: true } });

    cy.get(".bnb-button").should("have.class", "round");
  });

  it("should be have a shadow", () => {
    cy.mount(BnbButton, { props: { shadow: true } });

    cy.get(".bnb-button").should("have.class", "shadow");
  });
});
