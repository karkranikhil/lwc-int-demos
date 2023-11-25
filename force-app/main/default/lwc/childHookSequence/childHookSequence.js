import { LightningElement } from 'lwc';

export default class ChildHookSequence extends LightningElement {
    constructor(){
        super()
        console.log('Demo Child constructor called');
    }
    connectedCallback() {
        console.log('Demo Child ConnectedCallback called');  
    }
    
    renderedCallback() {
        console.log('Demo Child renderedCallback called');
    }
    disconnectedCallback() {
        console.log('Demo Child DisconnectedCallback called');
    }
    errorCallback(error, stack) {
        console.log('Demo Child errorCallback called');
    }


    
}