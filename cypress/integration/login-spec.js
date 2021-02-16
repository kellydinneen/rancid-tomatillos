describe('Login UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.login-button').click().wait(50)
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
      cy.get('header').get('img').click()
      .url().should('not.include','profile')
      cy.contains('Top Rated')
  });

  it('Should have inputs for email and  password', () => {
    cy.get('input[type="text"]')
      .type('Thirdu')
      .should('have.value', 'Thirdu')
      .get('input[type="password"]')
      .type('Ser')
      .should('have.value', 'Ser')
  });

  it('should display an error message when a user clicks the login button without filling both inputs', () => {
   cy.get('.login-btn').click()
   cy.contains('Please enter vaild email and password!')
 });

 it('Should login with correct inputs', () => {
   cy.fixture('testUsers.json')
     .then((testUsers) => {cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/users', {
       statusCode: 200,
       body: testUsers
     })})
   cy.get('input[type="text"]')
     .type('Thirdu')
     .should('have.value', 'Thirdu')
     .get('input[type="password"]')
     .type('Ser')
     .should('have.value', 'Ser')
     .get('.login-btn').click().wait(1000)
     .get('.profile-link').click().wait(1000)
   cy.contains('Thirdu Ser')
 });

});
