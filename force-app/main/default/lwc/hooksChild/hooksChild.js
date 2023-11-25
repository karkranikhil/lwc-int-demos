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
        //window.addEventListener('click', this.clickHandler)
        throw new Error('Parameter is not a number!')
    }
    // clickHandler=()=>{
    //     let color = Math.floor(Math.random()*16777215).toString(16)
    //     this.template.querySelector('div').style.backgroundColor='#'+color
    //     console.log("clickHandler called")
    // }
   

    disconnectedCallback() {
        console.log('Demo Child DisconnectedCallback called');
        window.removeEventListener('click', this.clickHandler)
    }

    renderedCallback(){
        console.log('Demo Child renderedCallback called');
    }

    errorCallback(error, stack) {
        console.log('Demo child errorCallback called');
    }
}