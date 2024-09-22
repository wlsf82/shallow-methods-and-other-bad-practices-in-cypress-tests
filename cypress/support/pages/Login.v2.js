export const visitLoginPage = () => cy.visit('/')

export const fillUsername = (username) => get('[data-test="username"]').type(username)

export const fillPassword = (password) => get('[data-test="password"]').type(password)

export const submit = () => get('input[type="submit"]').click()

const get = (selector, ...options) => cy.get(selector, { options })
