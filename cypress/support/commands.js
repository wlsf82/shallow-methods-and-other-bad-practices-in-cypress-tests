Cypress.Commands.add('visitLoginPage', (user) => {
  cy.visit('/')
  get('[data-test="username"]').type(user.username)
  get('[data-test="password"]').type(user.password)
  get('input[type="submit"]').click()
})

const get = (selector, ...options) => {
  return cy.get(selector, { options })
}
