import { LightningElement } from 'lwc';
import {formatCurrency} from 'c/utils'
export default class ServiceComponentDemo extends LightningElement {
    amount = 300000

    get formattedAmount(){
        return formatCurrency(this.amount, 'EUR')
    }

    
}

