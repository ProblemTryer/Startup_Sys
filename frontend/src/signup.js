import React, {Component, Fragment} from 'react'
import TabBar from './tabBar'
import {Login, SignInScreen} from './login'


class Signup extends Component{
    render(){
        return(
            <div>
                <TabBar value={true}/>
                <SignInScreen />
            </div>
        )
    }
}

export default Signup