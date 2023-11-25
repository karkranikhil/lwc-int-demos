import { LightningElement } from 'lwc';
import {getUserName} from './nameFile.js'
export default class MyFirstDemo extends LightningElement {
    userName = getUserName()
}