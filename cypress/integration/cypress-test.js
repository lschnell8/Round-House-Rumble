/* eslint-disable no-undef */

beforeEach(() => {
  cy.intercept('GET', 'https://api.chucknorris.io/jokes/random', {fixture: 'chuckNorrisJoke.json'})
  cy.visit('http://localhost:3000')
})

describe('Integreation tests' ,() => {
  it('Should exisit', () => {
    expect(true).to.equal(true)
  })

  it('Should contain Round House Rumble on homepage', () => {
    cy.contains('Round House Rumble')
  })

  it('Should contain a random joke', () => {
    cy.contains('p', 'Chuck Norris threw a grenade that killed 100 people it then exploded')
  })

  // it('Should test to see if there is no joke', () => {
  //   cy.contains('p', 'Nothing found')
  // })

  it('Should be able to grab the Chuck Norris image', () => {
    cy.get('img')
  })

  it('Should get another joke', () => {
    cy.get('.another-joke')
    .click()
  })

  it('Should be able to favorite a joke', () => {
    cy.get('.big-star')
    .click()
  })

  it('Should make your own joke', () => {
    cy.get('.to-form')
    .click()
    .get('label')

    cy.get('.input')
    .type('This is my first joke!')
    .should('have.value', 'This is my first joke!')
  })

  it('Should take you to a new page when the joke is made', () => {
    cy.get('.to-form')
      .click()
      .get('label')

    cy.get('.input')
      .type('This is my first joke!')
      .should('have.value', 'This is my first joke!')

    cy.get('.form > a > button').click()
    cy.get('p').contains('This is my first joke!')
    cy.get('img')
    
  })

  it('Should favorite a user joke', () => {
    cy.get('.to-form')
      .click()
      .get('label')

    cy.get('.input')
      .type('This is my first joke!')
      .should('have.value', 'This is my first joke!')

    cy.get('.form > a > button').click()
    cy.get('p').contains('This is my first joke!')
    cy.get('img')
    cy.get('.big-star').click()
  })


  it('Should view the favorite jokes', () => {
    cy.get('.big-star')
      .click()

    cy.get('.to-form')
      .click()
      .get('label')

    cy.get('.input')
      .type('This is my first joke!')
      .should('have.value', 'This is my first joke!')

    cy.get('.form > a > button').click()
    cy.get('p').contains('This is my first joke!')
    cy.get('img')
    cy.get('.big-star').click()

    cy.get('.to-favs')
    .click()
  })

  it('Should unfavorite a joke', () => {
    cy.get('.big-star')
      .click()

    cy.get('.to-form')
      .click()
      .get('label')

    cy.get('.input')
      .type('This is my first joke!')
      .should('have.value', 'This is my first joke!')

    cy.get('.form > a > button').click()
    cy.get('p').contains('This is my first joke!')
    cy.get('img')
    cy.get('.big-star').click()

    cy.get('.to-favs')
      .click()

    cy.get(':nth-child(1) > .top > .little-star')
      .click()
  })

  it('Should unfavorite all the jokes', () => {
    cy.get('.big-star')
      .click()

    cy.get('.to-form')
      .click()
      .get('label')

    cy.get('.input')
      .type('This is my first joke!')
      .should('have.value', 'This is my first joke!')

    cy.get('.form > a > button').click()
    cy.get('p').contains('This is my first joke!')
    cy.get('img')
    cy.get('.big-star').click()

    cy.get('.to-favs')
      .click()

    cy.get(':nth-child(1) > .top > .little-star')
      .click()

    cy.get('.little-star')
      .click()

    cy.get('p').contains('You don\'t have any favorites yet')
  })

})