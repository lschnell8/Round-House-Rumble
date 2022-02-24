const { get } = require("http")

beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('Integreation tests' ,() => {
  it('Should exisit', () => {
    expect(true).to.equal(true)
  })

  it('Should contain Round House Rumble on homepage', () => {
    cy.contains('Round House Rumble')
  })

  // We need to come up with sad paths in order to have a fully functional tests
  it('Should contain a random joke', () => {
    cy.contains('p')
  })

  it('Should test to see if there is no joke', () => {
    cy.contains('p', 'Nothing found')
  })

  it('Should be able to grab the Chuck Norris image', () => {
    cy.get('img')
  })

  // Everything unerneath this comment needs functionality to work in order to be fully tested
  it('Should get another joke', () => {
    cy.get('.another-joke')
    .click()
    // 
  })

  it('Should be able to favorite a joke', () => {
    cy.get('.main-container > :nth-child(3)')
    .click()

    cy.get('.main-container > :nth-child(4)')
    .click()
  })

  it('Should make your own joke', () => {
    cy.get('.to-form')
    .click()
    .get('label')

    cy.get('textarea')
    .type('This is my first joke!')
    .should('have.value', 'This is my first joke!')
  })

  it('Should take yout to a new page when the joke is made', () => {
    cy.get('.to-form')
      .click()
      .get('label')

    cy.get('textarea')
      .type('This is my first joke!')
      .should('have.value', 'This is my first joke!')

    cy.get('.make-ya-own').click()
      .url().should('include','/user-joke/:id')

    cy.get('p')
    cy.get('img')
    
  })


  // it('Should view the favorite jokes', () => {
  //   cy.get('.favorites')
  //   .click()
  // })

})