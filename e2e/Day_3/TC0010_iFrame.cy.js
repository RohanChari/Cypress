import 'cypress-iframe'
describe('IFrame Test', ()=> {

    it('Test1',()=>{
 
         cy.visit("https://jqueryui.com/draggable/")
         //frameloading
         cy.frameLoaded('.demo-frame');

         //shifting focus
         cy.iframe().find("#draggable").then(function(t){

            const frametext=t.text()
            expect(frametext).to.contains("Drag me around");
            cy.log(frametext);
         })
 
 })
})