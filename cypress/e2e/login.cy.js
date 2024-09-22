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
})
