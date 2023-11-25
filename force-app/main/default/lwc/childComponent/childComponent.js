import { LightningElement, api, track } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api  userInfo={
        "name":"Johnny",
        "age":23
    }


    @api 
    fetchUserInfo(){
        return this.userInfo
    }
}