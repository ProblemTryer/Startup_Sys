import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Index from './index'
import {Login, SignInScreen} from './login'
import Signup from './signup'
import Dashboard from './dashboard';
import VideoDemo from './VideoSquare'
import VideoJourney from './VideoJourney';
import About from './about'
import PostVideo from './postVideo'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/videoDemo" component={VideoDemo}/>
            <Route exact path="/videoJourney" component={VideoJourney}/>
            <Route exact path="/postVideo" component={PostVideo}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;