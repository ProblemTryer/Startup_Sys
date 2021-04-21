import React, {Component} from 'react'
import TabBar from './tabBar'
import AboutBlock from './aboutBlock'

class About extends Component{
    render(){
        return (
            <div>
                <TabBar value={true}/>
                <AboutBlock />
            </div>
        )
    }
}

export default About;
