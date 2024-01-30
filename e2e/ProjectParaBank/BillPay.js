export{BillPay}
class BillPay
{
   
        clickbillpay()
         {
            cy.get('a[href="/parabank/billpay.htm"]').click()  
         }   
        
        enterpayeename(payeename)
            
             {
                cy.get('input[name="payee.name"]').type(payeename)
            }

        enterAddress(Address)
        {
            cy.get('input[name="payee.address.street"]').type(Address) 
        }

        
        enterCity(City)
        {
            cy.get('input[name="payee.address.city"]').type(City) 
        }

        enterState(State)
        {

            cy.get('input[name="payee.address.state"]').type(State) 
        }

        enterZipCode(ZipCode)
        {
            cy.get('input[name="payee.address.zipCode"]').type(ZipCode) 
        }

        enterPhone(Phone)
        {
            cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(2) > input:nth-child(1)').type(Phone) 
        }

        enterAccount(Account)
        {
            cy.get('input[name="payee.accountNumber"]').type(Account)  
        }

        enterVerifyAccount(VerifyAccount)
        {
            cy.get('input[name="verifyAccount"]').type(VerifyAccount) 
        }

        enterAmount(Amount)
        {
            cy.get('input[name="amount"]').type(Amount)
        }

        fromFromaccount(Fromaccount)
        {
            cy.get('select[name="fromAccountId"]').select(Fromaccount) 
        }

        Click()
        {
            cy.get('input[value="Send Payment"]').click()
        }

    }














        
        

     
      
        
       

        
       
       
      

 
























