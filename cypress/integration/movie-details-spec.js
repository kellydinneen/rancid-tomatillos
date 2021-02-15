describe('Movie Details UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.login-button').click().wait(50)
    cy.fixture('testUsers.json')
      .then((testUsers) => {cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/users', {
        statusCode: 200,
        body: testUsers
      })})
    cy.get('input[type="email"]')
      .type('Thirdu')
      .get('input[type="password"]')
      .type('Ser')
      .get(.login-btn).click().wait(100)
    cy.get('.movies-container').children().first('link').click().wait(50)
  });

  it('Should have header and footer', () => {
      cy.get('footer').contains('About')
      cy.get('footer').contains('FAQ')
      cy.get('header').contains('Rancid Tomatillos')
      cy.get('header').find('img').should('have.class','home-button')
  });

  it('Should return to home after clicking site title', () => {
      cy.get('header').find('.site-title').click()
      .url().should('not.include','MoneyPlane')
      cy.contains('Top Rated')
  });

  it('Should return to home after clicking home button', () => {
      cy.get('header').get('img').click()
      .url().should('not.include','MoneyPlane')
      cy.contains('Top Rated')
  });

  it('Should show movie backdrop', () => {
      cy.get('.trailerContainer').children().first().should('have.class','movieBackdrop')
  });

  it('Should show movie title and rating', () => {
      cy.get('.featuredMovieData').children().first().contains('Money Plane')
      .next().contains('★')
  });

  it('Should show movie year, genre, and runtime', () => {
      cy.get('.movieData').children().first().contains('2020-09-29')
      .next().contains('Action')
      .next().contains('82 minutes')
  });

  it('Should show movie overview', () => {
      cy.get('.overview').contains('A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
  });

  it('Should reveal trailer', () => {
    cy.get('.viewTrailerBtn').click().wait(500)
    cy.get('.trailerContainer').children().first().should('have.class','trailer')
      .get('.trailer').click().screenshot('.trailer')
  });

  it('Should play trailer', () => {
    cy.get('.viewTrailerBtn').click()
    cy.get('.trailer').click().screenshot('.trailer')
  });

  it('Should hide trailer', () => {
    cy.get('.viewTrailerBtn').click().wait(500)
    cy.get('.trailerContainer').children().first().should('have.class','trailer')
    cy.get('.viewTrailerBtn').click().wait(500)
    cy.get('.trailerContainer').children().first().should('have.class','movieBackdrop')
  });

  it('Should be able to add movie to favorites', () => {
    cy.fixture('testMovies.json')
      .then((testMovie) => {cy.intercept('PATCH', 'https://rancid-tomatillos.herokuapp.com/api/v2/users/u3', {
        statusCode: 200,
        body: testMovie
      })})
    cy.get('.favorite-btn').click()
    cy.get('.profile-link').click().wait(50)
    cy.get('.favorites').children().first().children().should('have.class','poster 726739')
  });

  it('Should be able to delete movie from favorites', () => {
    cy.fixture('testMovies.json')
      .then((testMovie) => {cy.intercept('PATCH', 'https://rancid-tomatillos.herokuapp.com/api/v2/users/u3', {
        statusCode: 200,
        body: testMovie
      })})
    cy.get('.favorite-btn').click()
    cy.fixture('testMovies.json')
      .then((testMovie) => {cy.intercept('PATCH', 'https://rancid-tomatillos.herokuapp.com/api/v2/users/u3', {
        statusCode: 200,
        body: testMovie
      })})
    cy.get('.favorite-btn').click()
    cy.get('.profile-link').click().wait(50)
    cy.get('.favorites').children().first().children().should('not.have.class','poster 726739')
  });


});
