describe('Hooks', ()=> {

    before(()=> {
    
        cy.log("this is setup before function")
        //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })



    after(()=>{

        cy.log("this is after function")
        //cy.get('#leftPanel > ul > :nth-child(8) > a').click()
      })




    
    beforeEach(function(){
     
        cy.log("this is beforeEach Function")

        /*cy.fixture("data_orangeHRM.json").then( (d)=>{
            cy.get("input[name=username]").type(d.username) 
            cy.get("input[name=password]").type(d.password)
            cy.get("button[type=submit]").click()
      })*/

    })

    
    afterEach(function()
  {
      cy.log("This is aftereach function")
   // cy.get('.oxd-userdropdown-name').click()
    //cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

  })


 
  it('Test 1',()=>{
 
        cy.log("This is search")
              
  })


  it('Test 2',()=>{
 
    cy.log("advanced search")
          
})


it('Test 3',()=>{
 
  cy.log("listing product")
        
})

 
 })
