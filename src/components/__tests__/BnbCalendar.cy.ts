import BnbCalendar from "../BnbCalendar.vue";

describe("BnbCalendar", () => {
  it("renders the correct date", () => {
    cy.mount(BnbCalendar, { props: { month: 0, year: 2022 } });
    cy.get(".title").contains("Janvier 2022");
  });

  it("renders the correct number of days", () => {
    cy.mount(BnbCalendar, { props: { month: 0, year: 2022 } });
    cy.get(".date").contains("31");
  });

  it("renders the correct number of days on bissextile year", () => {
    cy.mount(BnbCalendar, { props: { month: 1, year: 2024 } });
    cy.get(".date").contains("29");
  });

  it("renders the correct start date", () => {
    cy.mount(BnbCalendar, {
      props: { month: 0, year: 2022, startDate: "12-01-2022" },
    });
    cy.get(".selected").contains("12");
  });

  it("renders the correct start date and end date", () => {
    cy.mount(BnbCalendar, {
      props: {
        month: 0,
        year: 2022,
        startDate: "12-01-2022",
        endDate: "14-01-2022",
      },
    });
    cy.get(".selected").contains("12");
    cy.get(".selected").contains("14");
    cy.get(".start-date").contains("12");
    cy.get(".range-date").contains("13");
    cy.get(".end-date").contains("14");
  });
});
