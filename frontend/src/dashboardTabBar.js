import React, {Component, Fragment} from 'react'

class DashboardTabBar extends Component{
    render(){
        return (
        <div>
            <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a href="#/"><button class="button is-white" style={{backgroundColor: "transparent"}}><h1 class="title is-4">SadPandas</h1></button></a>
                    {/* "navbar-burger only appears on touch devices." */}
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
            
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start" style={{width:'0px'}} />
                    <div class="navbar is-transparent">
                        <div class="column is-one-sixth"></div>
                        <a class="navbar-item">
                            <h1 class="title is-4">Clubs</h1>
                        </a>
                        <div class="column is-one-quarter"></div>
                        <a class="navbar-item">
                            <h1 class="title is-4">Appointment</h1>
                        </a>
                        <div class="column is-one-quarter"></div>
                        <a class="navbar-item">
                            <h1 class="title is-4">Setting</h1>
                        </a>
                    </div>
                    <div class="column is-one-quarter"></div>
                    <div class="navbar-start" />
                </div>
            </nav>
        </div>
        )
    }
}

export default DashboardTabBar;