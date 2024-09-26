import { loginPageV1 } from '../support/pages/Login.v1'
import {
  visitLoginPage,
  fillUsername,
  fillPassword,
  submit
} from '../support/pages/Login.v2'
import selectorsAll from '../support/pages/Login.v3'

describe('Login', () => {
  it('successfully logs in with valid credentials - v1', () => {
    loginPageV1.visit()

    loginPageV1.fillUsername('standard_user')
    loginPageV1.fillPassword('secret_sauce')

    loginPageV1.submit()

    cy.url().should('include', '/inventory')
    cy.contains('.title', 'Products').should('be.visible')
  })

  it('successfully logs in with valid credentials - v2', () => {
    visitLoginPage()

    fillUsername('standard_user')
    fillPassword('secret_sauce')

    submit()

    cy.url().should('include', '/inventory')
    cy.contains('.title', 'Products').should('be.visible')
  })

  it('successfully logs in with valid credentials - v3', () => {
    cy.visitLoginPage({ username: 'standard_user', password: 'secret_sauce'})

    cy.url().should('include', '/inventory')
    cy.contains('.title', 'Products').should('be.visible')
  })

  it('tests', () => {
    selectorsAll.visit.open()
    selectorsAll.login.username()
    selectorsAll.login.usernameTypeInTest('standard_user')
  })

  // The below test is the only one without bad practices
  it('successfully logs in with valid credentials', () => {
    // Visit the login page
    cy.visit('/')

    // Fill in the usernamea
    cy.get('[data-test="username"]').type('standard_user')

    // Fill in the password
    cy.get('[data-test="password"]').type('secret_sauce')

    // Submit the form
    cy.get('input[type="submit"]').click()

    // Assert that the user is redirected to the inventory page
    cy.url().should('include', '/inventory')

    // Assert that the Products title is visible
    cy.contains('.title', 'Products').should('be.visible')
  })
})
