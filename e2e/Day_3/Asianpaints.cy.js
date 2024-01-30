describe("AsianPaint", ()=> {

    it("Shop",()=>{
 
         cy.visit("https://www.asianpaints.com/")
         cy.wait(3000)
         cy.get(':nth-child(6) > .nav-link > .iconTextLinks__text').trigger('mouseover');
         cy.get(':nth-child(6) > .track_section').click();
         cy.get(':nth-child(1) > .anchor-explore-stores > .imageWrapper > .image-explore-stores > img').click()
         cy.get('[data-attr-prodsku="W107WZ65L45"] > :nth-child(5) > .global-button-white').click();
         cy.get('#cartPinCode').type("400069");
         cy.get('.pin-code-form > .ctaComp > .ctaText').click();   
 
 })
})