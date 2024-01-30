import{OpenNewAccount} from "./OpenNewAccount.js"
import{TransferFund} from "D:\\dec_2023\\cypress\\e2e\\ProjectParaBank\\TransferFund.js"
import{BillPay} from "./BillPay.js"

 describe("ParaBank", ()=> {
  
   before(()=> {
         
      cy.visit("https://parabank.parasoft.com/parabank/index.htm")
  })
  

  beforeEach(()=>{
    
   cy.visit("https://parabank.parasoft.com/parabank/index.htm")
   cy.get(':nth-child(2) > .input').type('sweet')
   cy.get(':nth-child(4) > .input').type('Vivanta')
   cy.get(':nth-child(5) > .button').click()
})


  afterEach(()=>{
  
  cy.get('#leftPanel > ul > :nth-child(8) > a').click()
  
  })



it("Open New Account", ()=>{

cy.then((d)=>{
let obj  =new OpenNewAccount()
obj.clickOpenNewAccount()

   })         
})


it("Transfer funds", ()=>{

   cy.then((d)=>{  
   let obj  =new TransferFund()
   obj.clickTransferfund()

   })         
})


it("Bill Pay", ()=>{

   cy.fixture("BillPay.json").then((d)=>{
   let obj  =new BillPay()
   obj.clickbillpay()
   obj.enterpayeename(d.payeename)
   obj.enterAddress(d.Address)
   obj.enterCity(d.City)
   obj.enterState(d.State)
   obj.enterZipCode(d.ZipCode)
   obj.enterPhone(d.Phone)
   obj.enterAccount(d.Account)
   obj.enterVerifyAccount(d.VerifyAccount)
   obj.enterAmount(d.Amount)
   obj.fromFromaccount(d.Fromaccount)
   obj.Click()

   })         
})

})


/*cy.fixture("data_orangeHRM.json").then((T)=>{
   let obj  =new loginpage()
   obj.enterusername(d.username)
   obj.enterpassword(d.password)
   obj.clickonsubmit()

})*/


   



/*describe("Account Services", ()=> {
    
before(()=> {
     
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
})


beforeEach(()=>{

cy.visit("https://parabank.parasoft.com/parabank/index.htm")
cy.get(':nth-child(2) > .input').type('tavi')
cy.get(':nth-child(4) > .input').type('Vivanta')
cy.get(':nth-child(5) > .button').click()
})



afterEach(()=>{

cy.get('#leftPanel > ul > :nth-child(8) > a').click()

})


     it("Open New Account",()=> {
  
        cy.get('#leftPanel > ul > :nth-child(1) > a').click()
        cy.wait(1000)
        cy.get('#type').select('1').should('have.value','1') 
        cy.get('#fromAccountId').select('15231').should('have.value','15231') 
        cy.get('form.ng-valid > div > .button').click()      
     })   
     

     it(" Transfer Funds",()=> {
  
        cy.get('#leftPanel > ul > :nth-child(3) > a').click()
        cy.get('#amount').type('1000')
        cy.wait(1000)
        cy.get('#fromAccountId').select('24222').should('have.value','24222') 
        cy.get('#toAccountId').select('24333').should('have.value','24333')
        cy.get(':nth-child(4) > .button').click()
          
          
        })         

})

*/






















