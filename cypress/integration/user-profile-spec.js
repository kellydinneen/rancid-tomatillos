describe('User Profile UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.login-button').click().wait(50)
    cy.get('input[type="email"]')
      .type('Thirdu')
      .get('input[type="password"]')
      .type('Ser')
      .get(.login-btn).click().wait(100)
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

  it('Should show user name', () => {
      cy.get('.userName').contains('Thirdu Ser')
  });

  it('Should show user favorites', () => {
      cy.get('.favorites-label').contains('Favorites')
      cy.get('.favorites')
  });
});
