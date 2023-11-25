import { LightningElement } from 'lwc';

export default class ConstructorParent extends LightningElement {
    name
    age
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}