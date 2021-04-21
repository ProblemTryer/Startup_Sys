import 'semantic-ui-css/semantic.min.css'
import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
// 自定义组件必须用大写
// import {App, TabBar} from './App'
import IndexMainBlock from './indexMainBlock'

class Index extends Component{
    render(){
        return(
            <div>
                <IndexMainBlock />
            </div>
        )
    }
}

export default Index
document.body.parentElement.style.overflowY = "hidden";
ReactDOM.render(<Router/>, document.getElementById('root'));