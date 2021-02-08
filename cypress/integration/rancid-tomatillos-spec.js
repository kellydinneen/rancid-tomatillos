describe('Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('Should be able to visit the page and render the correct elements', () => {
      cy.contains('Rancid Tomatillos')
      cy.contains('Top Rated')
      cy.get('footer').contains('About')
  });

  it('Should be able to visit the page and render the correct elements', () => {
      cy.get('.movies-container').children().first('link').click()
      cy.url()
      cy.contains('minutes')
      cy.get('.featuredMovieData').contains('Money Plane')
  });

});
