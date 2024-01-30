describe("Alert", ()=> {

    it.skip("Sample Alert",()=>{
 
         cy.visit("https://letcode.in/alert")
         cy.get('#accept').click()
         cy.on('window:alert',(t)=>{

            expect(t).contains("Hey! Welcome to LetCode")
         })
      
  })
 
 
  //describe("Confirm", ()=> {

    it.only("confirm Alert",()=>{
 
         cy.visit("https://letcode.in/alert")
         cy.get('#confirm').click()
         cy.on('window:alert',(t)=>{

            expect(t).contains("Are you happy with LetCode?")
         })
      
  })








  
})