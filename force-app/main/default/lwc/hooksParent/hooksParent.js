import { LightningElement } from 'lwc';
import hooksParentTemplate from './hooksParent.html'
export default class HooksParent extends LightningElement {
    name="SAP"
    isLoaded = false
    changeName(){
        this.name = "Salesforce"+ Math.random()
    }

    renderedCallback() {
        
        console.log('Demo Parent renderedCallback called');
        /*const element = this.template.querySelector('h1')
        console.log("Demo h1 text", element?.innerText)*/
        if(!this.isLoaded){
            this.fetchChartsjs()
            this.isLoaded = true
        }
       
    }
    fetchChartsjs(){
        console.log("Lib loaded successfully")
    }
    /*constructor(){
        super()
        console.log('Demo Parent constructor called');
    }
    connectedCallback() {
       
        console.log('Demo Parent ConnectedCallback called');  
        const element = this.template.querySelector('h1')
        console.log("text", element?.innerText)
    }
    render(){
        console.log('Demo Parent  render called');
        return hooksParentTemplate
    }
    renderedCallback() {
        console.log('Demo Parent renderedCallback called');
    }
    disconnectedCallback() {
        console.log('Demo Parent DisconnectedCallback called');
    }

    errorCallback(error, stack) {
        console.log('Demo Parent errorCallback called', error.message);
    }

    show = true
    toggle(){
        this.show = !this.show
    }*/

}