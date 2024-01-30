describe("Alert assignment", ()=> {

    it.only("Sample Alert",()=>{
 
         cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
         cy.get('#alertexamples').click()
         cy.on('window:alert',(t)=>{

          expect(t).contains("I am an alert box!")
       })
   })
 
  it.only("confirm Alert",()=>{
 
    cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    cy.get('#confirmexample').click()
    cy.on('window:alert',(t)=>{

     expect(t).contains("I am a confirm alert")
  })
})

it.only(" Prompt Alert",()=>{
 
  cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
  cy.get('#promptexample').click()
  cy.on('window:alert',(t)=>{

   expect(t).contains("I prompt you")
})
})
})