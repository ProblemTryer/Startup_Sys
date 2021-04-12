import React, {Component, Fragment} from 'react'
import TabBar from './tabBar'
import {Login, LoginMain} from './login'


class Signup extends Component{
    render(){
        return(
            <div>
                <TabBar value={true}/>
                <LoginMain text={"Sign Up"}/>
            </div>
        )
    }
}

export default Signup