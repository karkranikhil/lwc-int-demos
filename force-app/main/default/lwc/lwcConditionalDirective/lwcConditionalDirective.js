import { LightningElement } from 'lwc';

export default class LwcConditionalDirective extends LightningElement {
    age = 20
    get isGenZ(){
        console.log("isGenZ called")
        return this.age>=11 && this.age<= 26
    }
    get isMillennials(){
        console.log("isMillennials called")
        return this.age>=27 && this.age<= 42
    }
   

    get isGenZ1(){
        console.log("isGenZ1 called")
        return this.age>=11 && this.age<= 26
    }
    get isMillennials1(){
        console.log("isMillennials1 called")
        return this.age>=27 && this.age<= 42
    }
    get otherAge1(){
        console.log("otherAge1 called")
        return this.age<11 && this.age> 42
    }
}