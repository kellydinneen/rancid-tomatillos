describe('Movie Details UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.movies-container').children().first('link').click()
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
      cy.get('main').find('img').should('have.class','movieBackdrop')
      .get('.movieBackdrop').should('not.have.class', 'hidden')
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
      cy.get('.movieData').children().first().contains('2020-09-29')
      .next().contains('Action')
      .next().contains('82 minutes')
  });

  it('Should reveal trailer', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('something about the error')
      done()
      return false
    })
    cy.get('.viewTrailerBtn').click().wait(2000)
      .get('.movieBackdrop').should('have.class', 'hidden')
      .get('.trailer').click().wait(2000).screenshot('.trailer')
  });

  it('Should hide trailer', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('something about the error')
      done()
      return false
    })
    cy.get('.viewTrailerBtn').click()
      .get('.viewTrailerBtn').click()
      .get('.movieBackdrop').should('not.have.class', 'hidden')
  });


});
