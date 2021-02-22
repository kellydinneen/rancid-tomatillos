describe('User Profile UI', () => {
  beforeEach(() => {
    cy.fixture('testMovies.json')
      .then((testMovies) => {cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 200,
        body: testMovies
      })})
    cy.fixture('testUsers.json')
      .then((testUsers) => {cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/users', {
        statusCode: 200,
        body: testUsers
      })})
    cy.visit('http://localhost:3000').wait(1000);
    cy.get('.profile-button').click();
  });

  it('Should have header and footer', () => {
      cy.get('footer').contains('About')
      cy.get('footer').contains('FAQ')
      cy.get('header').contains('Rancid Tomatillos')
      cy.get('header').find('img').should('have.class','home-button')
  });

  it('Should return to home after clicking site title', () => {
      cy.get('header').find('.site-title').click()
      .url().should('not.include','profile')
      cy.contains('Top Rated')
  });

  it('Should return to home after clicking home button', () => {
      cy.get('header').get('.home-button').click()
      .url().should('not.include','profile')
      cy.contains('Top Rated')
  });

  it('Should show user name', () => {
      cy.get('.userName').contains('Jessica Candel')
  });

  it('Should show user favorites', () => {
      cy.get('.favorites-label').contains('Favorites')
      cy.get('.favorites')
  });
});
