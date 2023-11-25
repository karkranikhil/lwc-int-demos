import { LightningElement } from 'lwc';
import hooksChildTemplate from './hooksChild.html'
export default class HooksChild extends LightningElement {
  

    constructor() {
        super();
        console.log('Demo Child Constructor called');
        
    }
    render(){
        console.log('Demo Child render called');
        return hooksChildTemplate
    }

    connectedCallback() {
        console.log('Demo Child ConnectedCallback called');
        throw new Error('Parameter is not a number!')
    }
    renderedCallback(){
        console.log('Demo Child renderedCallback called');
    }

    disconnectedCallback() {
        console.log('Demo Child DisconnectedCallback called');
    }

    errorCallback(error, stack) {
        console.log('Demo child errorCallback called');
    }
}