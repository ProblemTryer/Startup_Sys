import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Index from './index'
import {Login, LoginMain} from './login'
import Signup from './signup'
import Dashboard from './dashboard';
import VideoDemo from './VideoSquare'
import VideoJourney from './VideoPlay';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/videoDemo" component={VideoDemo}/>
            <Route exact path="/videoJourney" component={VideoJourney}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;