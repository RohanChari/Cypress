describe("Assertion", ()=> {

    it.skip("Implicit Assertion",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
    // cy.title().should("eq","OrangeHRM")
    .and("include","orange")
    .and("contain","orange")
    
    /*cy.get("input[name=username]").type("Admin")
     cy.get("input[name=password]").type("admin123")
     cy.get("button[type=submit]").click()*/
 })



 it("Explicit Assertion",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.get('.oxd-button').click()
   let expname="Burak İkinci"
   cy.get('.oxd-userdropdown-name').then((x)=> {
   let acname= x.text()
   expect(acname).to.equal("Burak İkinci")
   expect(acname).to.not.equal(expname)

   assert.equal(acname,expname)
   assert.notEqual(acname,expname)


   })
  
  })

})