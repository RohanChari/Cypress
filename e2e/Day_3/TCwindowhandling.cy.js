/*describe('Example to demonstrate the handling of new browser windows in cypress', () => {

    it('Handling new Browser Tab', function () {
        cy.visit('')
        cy.wait(3000)
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/windows/new')
        cy.get('h3').should('have.text', 'New Window') 
    })


describe("Handle",()=>{
    it('Check',()=>{
        cy.visit("https://demoqa.com/browser-windows")
        cy.get('#tabButton').invoke('removeAttr','target').click();
    })
})
})*/


it.only("href attribute", ()=>{

    cy.visit("https://www.asianpaints.com/online-shop/colour-selection-tools.html")
    cy.wait(3000)
    cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > p').then(newtab=>{
        const hreftab=newtab.prop('href')
        cy.log(hreftab)
        let length1=hreftab.length()
        let newtb=hreftab.substring(6,length1-6)
                    cy.visit(newtb)
cy.log(newtb)
        cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")
    })
})















































/*describe("new tab", ()=> {
  
    it.skip("remove attribute", ()=>{

cy.visit("https://demoqa.com/browser-windows")
cy.wait(10000)
cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > .loadLazyImage').invoke('removeAttr','target').click()
cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")


    })
it.only("href attribute", ()=>{

        cy.visit("https://www.asianpaints.com/online-shop/colour-selection-tools.html")
        cy.wait(3000)
        cy.get('[href="https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html"] > p').then(newtab=>{
            const hreftab=newtab.prop('href')
            cy.visit(hreftab)
            cy.url().should("eq","https://www.asianpaints.com/online-shop/colour-selection-tools/woodtech-spectra-1600.html")
        })
    })
})*/