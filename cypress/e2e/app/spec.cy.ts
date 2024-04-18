
class FormAuth {
  elements = {
    inputLogin: () => cy.get('#inputLogin'),
    inputPass: () => cy.get('#inputPass'),
    buttonSubmit: () => cy.get('#buttonSubmit'),
    loginErrorMessage: () => cy.get('#loginErrorMessage'),
    passErrorMessage: () => cy.get('#passErrorMessage')
  }

  typeLogin(val: string) {
    if(!val) { return }
    this.elements.inputLogin().type(val)
  }

  typePass(val: string) {
    if(!val) { return }
    
    this.elements.inputPass().type(val)
  }

  clickButtonSubmit() {
    this.elements.buttonSubmit().click()
  }
}

const formAuth = new FormAuth()

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/') 
  })

  it('quando eu entrar na página, eu não devo ver nenhuma mensagem de erro', async() => {
    
    formAuth.elements.loginErrorMessage().then((element) => {
      !Cypress.dom.isHidden(element)
    })
  })

  it('eu devo checar/assegurar que os campos de login e senha estejam vazios', () => {
    formAuth.elements.inputLogin().should('contain.text', '')
    formAuth.elements.inputPass().should('contain.text', '')
  })

  it('should check if input login is empty and provide an visual error', () => {
    formAuth.elements.inputLogin().should((element) => {
      const styles = window.getComputedStyle(element[0])
      const border = styles.getPropertyValue('border-right-color')

    })
    formAuth.typeLogin('bolo de cenoura')
  })
})