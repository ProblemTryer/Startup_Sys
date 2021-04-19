import 'semantic-ui-css/semantic.min.css'
import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import TabBar from './tabBar'
import IndexBlock from './indexBlock'
import Router from './router'
// 自定义组件必须用大写
// import {App, TabBar} from './App'

class Index extends Component{
    render(){
        return (
            <div>
                <TabBar value={false}/>
                <IndexBlock />
            </div>
        )
    }
}

export default Index;

ReactDOM.render(<Router/>, document.getElementById('root'));