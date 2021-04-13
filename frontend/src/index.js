import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import TabBar from './tabBar'
import IndexBlock from './indexBlock'
import Router from './router'
// 自定义组件必须用大写
// import {App, TabBar} from './App'

var firebaseConfig = {
    apiKey: "AIzaSyCVN-bAR9d9PjwuhofMG1jr7WOHgDbQfYE",
    authDomain: "sadpandas-81a75.firebaseapp.com",
    projectId: "sadpandas-81a75",
    storageBucket: "sadpandas-81a75.appspot.com",
    messagingSenderId: "205876765134",
    appId: "1:205876765134:web:b0443ea445544a916e4b9f",
    measurementId: "G-4V03H5QDR4"
};

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