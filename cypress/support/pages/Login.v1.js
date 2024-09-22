class LoginPageV1 {
  visit() {
    cy.visit('/')
  }

  fillUsername(username) {
    this.get('[data-test="username"]').type(username)
  }

  fillPassword(password) {
    this.get('[data-test="password"]').type(password)
  }

  submit() {
    this.get('input[type="submit"]').click()
  }

  get(selector, ...options) {
    return cy.get(selector, { log: false, options })
  }
}

export const loginPageV1 = new LoginPageV1()
