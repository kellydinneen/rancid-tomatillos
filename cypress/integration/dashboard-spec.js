describe('Dashboard UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to visit the page and render the title', () => {
    cy.get('header').contains('Rancid Tomatillos').should('be.visible')
  });

  it.only('Should have a button to the Login page', () => {
    cy.get('.login-button').contains('Log in')
      .click()
    cy.url().should('include', 'login')
  });

  it('Should render a section for the Top Rated movies that has the top three movies\'s titles and ratings', () => {
    cy.contains('Top Rated')
    cy.get('.top-three-section > #1').contains('7')
    cy.get('.top-three-section > #2').contains('7')
    cy.get('.top-three-section > #3').contains('6.8')
    cy.get('.top-three-section > #1').contains('h4', 'Peninsula')
    cy.get('.top-three-section > #2').contains('h4', 'Cats & Dogs 3: Paws Unite')
    cy.get('.top-three-section > #3').contains('h4', 'The King of Staten Island')
  });

  it('Should be able to click the rating or title for the top rated movie and visit the correct Movie Details page', () => {
    cy.get('#1 > h3').click()
    cy.url().should('include', 'movie-details/Peninsula')
    cy.visit('http://localhost:3000')
    cy.get('#1 > h4').click()
    cy.url().should('include', 'movie-details/Peninsula')
  });

  it('Should be able to click the rating or title for the second top rated movie and visit the correct Movie Details page', () => {
    cy.get('#2 > h3').click()
    cy.url().should('include', 'movie-details/Cats&Dogs3:PawsUnite')
    cy.visit('http://localhost:3000')
    cy.get('#2 > h4').click()
    cy.url().should('include', 'movie-details/Cats&Dogs3:PawsUnite')
  });

  it('Should be able to click the rating or title for the third top rated movie and visit the correct Movie Details page', () => {
    cy.get('#3 > h3').click()
    cy.url().should('include', 'movie-details/TheKingofStatenIsland')
    cy.visit('http://localhost:3000')
    cy.get('#3 > h4').click()
    cy.url().should('include', 'movie-details/TheKingofStatenIsland')
  });

  it('Should have a section containing all of the movie posters', () => {
    cy.get('.movies-container a').should('have.length', '40')
  });

  // it('Should have a link for each movie in the section that holds all of the movie posters', () => {
  //   cy.get('.movies-container').children()
  //     .each((element) => {
  //       element.children()
  //     })
  // })

  it('Should have a left scroll image that has an alt stating it is the left scroll image', () => {
    cy.get('.scrollButtonLeft').should('have.attr', 'alt', 'Scroll Left Arrow')
  });

  it('Should have a right scroll image that has an alt stating it is the right scroll image', () => {
    cy.get('.scrollButtonRight').should('have.attr', 'alt', 'Scroll Right Arrow')
  });

  it('Should scroll to the right in the section containing all the movie posters.', () => {
    cy.get('.movies-container').scrollTo('right')
  });

  it('Should render a footer that contains an About, FAQ, and Contact Us links', () => {
    cy.get('.about').contains('About')
    cy.get('.faq').contains('FAQ')
    cy.get('.contact-us').contains('Contact Us')
  });

  it('Should be able to click the footer link About and visit the corresponding page', () => {
    cy.get('.about').click()
    cy.url().should('include', '/about')
  });

  it('Should be able to click the footer link FAQ and visit the corresponding page', () => {
    cy.get('.faq').click()
    cy.url().should('include', '/faq')
  });

  it('Should be able to click the footer link Contact Us and visit the corresponding page', () => {
    cy.get('.contact-us').click()
    cy.url().should('include', '/contact-us')
  });

});
