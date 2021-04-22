import React, {Component, Fragment} from 'react'

class BrandImage extends Component{
    render(){
        return (
            <div>
                <a class="" href="#/">
                    <img alt='No image' src="logo.png"  style={{position:"relative", width:'100px', height:'100px', float:"right", marginRight:"5%", marginTop:"-1%"}} />
                </a>
            </div>
        )
    }
}


class ClubTabBar extends Component{
    constructor(props) {
        super(props);
        this.clubName  = props.clubName;
    }
    render(){
        return (
        <div>
            <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a href="#/dashboard"><button class="button is-white" style={{backgroundColor: "transparent"}}><h1 class="title is-4">Dashboard</h1></button></a>
                    {/* "navbar-burger only appears on touch devices." */}
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
            
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end" ></div>
                    <div class="navbar-end" ></div>
                    <div class="navbar-start is-transparent">
                        <div class="column is-one-quarters"></div>
                        <a class="navbar-item">
                        <p style={{font:"16px Lucida Handwriting, sans-serif"}}>
                            <h1 class="title is-3">{this.clubName}</h1></p>
                        </a>
                    </div>
                    <div class="navbar-start" ></div>
                    <div class="navbar-start" ></div>
                </div>
            </nav>
            <BrandImage />
        </div>
        )
    }
}

export default ClubTabBar;