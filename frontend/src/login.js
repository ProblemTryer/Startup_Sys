import React, {Component, Fragment} from 'react'
import TabBar from './tabBar'


class InputUserNameAndPw extends Component{
    constructor(props) {
        super(props);
        this.text  = props.text;
    } 
    render(){
        return(
            <div class="column is-4 is-offset-one-third">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input is-primary" type="email" placeholder="Email"/>
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        {/* <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span> */}
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input is-primary" type="password" placeholder="Password" />
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="column" />
                <div align="center" >
                <a class="button is-link is-light is-large is-rounded is-success" href='#/login'>
                    <h class="title is-3" style={{marginRight:"10px", height: "50%"}}>{this.text}</h> 
                    <i class="fas fa-arrow-right"></i>
                </a>
                </div>
            </div>
        )
    }
}

class LoginMain extends Component{
    constructor(props) {
        super(props);
        this.text  = props.text;
    } 
    render(){
        return (
            <div>
                <div class="column" /><div class="column" />
                <div>
                    <figure class="image" style={{width:'300px', height:'300px', position: 'relative', right:'0', left:'0', margin:'0 auto'}}>
                        <img alt='No image' src="login logo.png" />
                    </figure>
                </div>
                <InputUserNameAndPw text={this.text}/>
            </div>
        )
    }
}


class Login extends Component{
    constructor(props) {
        super(props);
        this.text  = props.text;
    } 
    render(){
        return(
            <div>
                <TabBar value={true}/>
                <LoginMain text={"Login"}/>
            </div>
        )
    }
}

export {Login, LoginMain}