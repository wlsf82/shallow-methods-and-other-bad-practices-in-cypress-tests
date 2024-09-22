const selectorsAll = {
  visit: {
    open: () => cy.visit('/')
  },

  login: {
    username: () => get('[data-test="username"]'),
    usernameTypeInTest: (username) => get('[data-test="username"]').type(username)
  },

  register: {}
}

function get(selector, ...options) {
  return cy.get(selector, { options })
}

export default selectorsAll
