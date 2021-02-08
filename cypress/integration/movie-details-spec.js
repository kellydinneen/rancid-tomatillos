describe('Movie Details UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.movies-container').children().first('link').click()
  });

});
