describe("Mouse operations", ()=> {

    it.skip("Mouse Hover",()=>{
     
     cy.visit("https://demo.opencart.com/")
     cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
     cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should('be.visible').click()

     })


    it.skip("Right Click",()=>{
     
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get('.context-menu-one').trigger("contextmenu")
        //cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-icon-copy').click()
   
        })

        it.only("Double Click",()=>{
     
            cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick")
            cy.iframe("").find()
            //cy.get('.context-menu-one').trigger("contextmenu")
            //cy.get('.context-menu-one').rightclick()
            //cy.get('.context-menu-icon-copy').click()
       
            })


         
            it.only("Double Click",()=>{
                cy.visit("https://www.plus2net.com/javascript_tutorial/ondblclick-demo2.php")
                cy.get('input').dblclick();
            })





})

