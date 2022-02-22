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
    cy.get('p')
  })

  it('Should be able to grab the Chuck Norris image', () => {
    cy.get('img')
  })

  // Everything unerneath vthis comment needs functionality to work in order to be fully tested
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
    cy.get('.form-page')
    .click()
  })

  it('Should view the favorite jokes', () => {
    cy.get('.favorites')
    .click()
  })

})