import { LightningElement } from 'lwc';
import RenderDemoMain from './renderDemo.html'
import RenderDemoOther from './renderDemoOther.html'
export default class RenderDemo extends LightningElement {
    theme="lightning"

    render(){
        return this.theme === "lightning" ? RenderDemoMain:RenderDemoOther
    }

    changeTheme(){
        this.theme = this.theme === "lightning" ? 'Newport':"lightning"
    }
}

