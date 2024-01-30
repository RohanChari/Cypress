describe("Data Driven", ()=> {

    it("using fixtures",()=>{
    cy.fixture("data_orangeHRM").then((data)=>{

     cy.visit(data.url)
     cy.get("input[name=username]").type(data.username)
     cy.get("input[name=password]").type(data.password)
     cy.get("button[type=submit]").click()

    })
})

})

    
    
    
    
    
    
    
   /* cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
    // cy.title().should("eq","OrangeHRM")
    .and("include","orange")
    .and("contain","orange")
    
   })
})*/
   
   
   
   
   
    /*cy.get("input[name=username]").type("Admin")
     cy.get("input[name=password]").type("admin123")
     cy.get("button[type=submit]").click()*/
 