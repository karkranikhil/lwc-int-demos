import { LightningElement } from 'lwc';

export default class JsQuestionsDemo extends LightningElement {
    /***event.preventDefault() vs event.stopPropagation() demo */
    handleLinkClick(event) {
        event.preventDefault()
        console.log('Link Clicked');
    }


    handleDivClick(event) {
        console.log('Clicked Element:', event.target);
    }

    handleButtonClick(event) {
        event.stopPropagation()
        console.log('Button Clicked');
        
    }







    /***data attribute demo */
    dataAttrList=[
        {
            Id:'553564646464564',
            Name:"Honda"
        },
        {
            Id:'663564646464564',
            Name:"BMW"
        },
        {
            Id:'773564646464564',
            Name:"Tayota"
        }
    ]
    attrHandler(event){
        console.log("using dataset recordId", event.target.dataset.recordId)
        console.log("using getAttribute recordId", event.target.getAttribute('data-record-Id'))
    }



    /**event.target vs event.currentTarget */

    clickhandler(event){
        console.log("event.target html", event.target.innerHTML)
        console.log("event.target id", event.target.id)

        console.log("event.currentTarget html", event.currentTarget.innerHTML)
        console.log("event.currentTarget id", event.currentTarget.id)
    }






    /**Arrow function Demo */
    num = 5
    add(a){
        return a+this.num
    }
    add1=a=>a+this.num
    // add1=(a)=>a+this.num
    // add1=a=>{
    //     return a+this.num
    // }

    // connectedCallback(){
    //     console.log("traditional",  this.add(2))
    //     console.log("arrow", this.add1(2))
    // }

    // renderedCallback(){
    //     let element = this.refs.actionButton
    //     if(element){
    //         element.addEventListener('click',this.cbFunction.bind(this))
    //     }
    // }

    cbFunction(){
        //this keyword inside the cbFunction refers to the actionButton element, not to the component.
        // This means that you cannot access the component's properties or methods using 
        //this inside the cbFunction.
        console.log("this.num", this.num)
    }




    /***Callback Demo ***/
    // numbers =[1,2,3,4,5]

    // renderedCallback(){
    //     let element = this.refs.actionButton
    //     if(element){
    //         element.addEventListener('click',this.cbFunction)
    //     }
    // }
    // cbFunction=()=>{
    //     alert("Button is clicked")
    //     const doubleNumber = this.numbers.map(function(item){
    //         return item*2
    //     })
    //     console.log("doubleNumber", doubleNumber)
    // }
    
}