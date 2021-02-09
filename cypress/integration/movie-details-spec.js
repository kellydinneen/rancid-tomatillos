describe('Movie Details UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.movies-container').children().first('link').click()
  });

  it('Should have header and footer', () => {
      cy.get('footer').contains('About')
      cy.get('footer').contains('FAQ')
      cy.get('header').contains('Rancid Tomatillos')
      cy.get('header').contains('button')
  });

  it('Should return to home after clicking home button', () => {
      cy.get('header').get('button').click()
      cy.contains('Top Rated')
  });

  it('Should return to home after clicking home button', () => {
      cy.get('header').get('button').click()
      cy.contains('Top Rated')
  });

  it('Should return to home after clicking home button', () => {
      cy.get('trailerContainer').contains('movieBackdrop')
  });

  it('Should return to home after clicking home button', () => {
      cy.get('viewTrailerBtn').click()
      cy.get('trailer').click().screenshot()
  });


});
