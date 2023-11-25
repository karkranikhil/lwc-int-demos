import { LightningElement } from 'lwc';
import hooksParentTemplate from './parentHookSequence.html'
export default class ParentHookSequence extends LightningElement {
    show = true
    toggle(){
        this.show = !this.show
    }
    constructor(){
        super()
        console.log('Demo Parent constructor called');
    }
    connectedCallback() {
        console.log('Demo Parent ConnectedCallback called');  
    }
    
    renderedCallback() {
        console.log('Demo Parent renderedCallback called');
    }
    disconnectedCallback() {
        console.log('Demo Parent DisconnectedCallback called');
    }
    errorCallback(error, stack) {
        console.log('Demo Parent errorCallback called');
    }


    /**Special Method ***/
    /*render(){
        console.log('Demo Parent  render called');
        ///The main use case is to conditionally render a template. 
        //The method must return a valid HTML template.
        return hooksParentTemplate
    }*/
}