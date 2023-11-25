import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
   
    fetchedInfo

    clickHandler(){
        const childRef = this.template.querySelector('c-child-component')
        this.fetchedInfo = childRef.fetchUserInfo()
    }
}