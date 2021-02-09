describe('Dashboard UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to visit the page and render the title', () => {
    cy.get('header').contains('Rancid Tomatillos')
  });

  it('Should render a section for the Top Rated movies that has the top three movies\'s titles and ratings', () => {
    cy.contains('Top Rated')
    cy.get('.top-three-section').contains('h3', '7')
    cy.get('.top-three-section').contains('h3', '7')
    cy.get('.top-three-section').contains('h3', '6.8')
    cy.get('.top-three-section').contains('h4', 'Peninsula')
    cy.get('.top-three-section').contains('h4', 'Cats & Dogs 3: Paws Unite')
    cy.get('.top-three-section').contains('h4', 'The King of Staten Island')
  })


  // it('Should be able to visit the page and render the correct elements', () => {
  //     cy.get('.movies-container').children().first('link').click()
  //     cy.url()
  //     cy.contains('minutes')
  //     cy.get('.featuredMovieData').contains('Money Plane')
  // });

});
