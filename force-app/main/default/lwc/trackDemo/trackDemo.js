import { LightningElement, track } from 'lwc';

export default class TrackDemo extends LightningElement {
     obj1 = {name:"john"}
    clickHandler1(){
        this.obj1= {name:"Troop"}
    }
}