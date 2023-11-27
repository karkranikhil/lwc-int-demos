import { LightningElement } from 'lwc';
import getContactList from "@salesforce/apex/ContactController.getContactList";
import getAccountList from "@salesforce/apex/ContactController.getAccountList";
export default class PromiseDemo extends LightningElement {
    fetchAllRecords(){
        const contactList =  getContactList()
        const accountList =  getAccountList()
        const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Error in Two'), 2000));
        Promise.allSettled([contactList, promise2, accountList]).then(values=>{
            console.log("Promise.allSettled", values)
        }).catch(errors=>{
            console.error("Promise.allSettled", errors)
        })
    }



//
    // fetchRecords(){
    //     const contactList =  getContactList()
    //     const accountList =  getAccountList()
    //     const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Error in Two'), 2000));
    //     Promise.all([contactList,promise2,  accountList]).then(values=>{
    //         console.log("Promise.all", values)
    //     }).catch(errors=>{
    //         console.error("Promise.all", errors)
    //     })
    // }

    // 
    // fetchContacts(){
    //    const result =  getContactList()
    //    console.log(result)
    //     result.then((result) => {
    //       console.log("promise result", result)
    //     })
    //     .catch((error) => {
    //         console.error("promise error", error)
    //     });
    // }

    
}