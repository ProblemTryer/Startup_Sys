import React, {Component, Fragment} from 'react'

class TabBar extends Component{
    constructor(props) {
        super(props);
        this.value  = props.value;
    }
    render(){
        return (
        <Fragment>
            <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div id="navbarExampleTransparentExample" class="navbar-menu">
                    {this.value && 
                        <div>
                            <a href="/">
                            <figure class="image is-64x64">
                                <img alt='No image' src="logo.png" />
                            </figure>
                            </a>
                        </div>
                    }
                    <div class="navbar-end">
                        <a class="navbar-item">
                            <h1 class="title is-4">About</h1>
                        </a>

                        <a class="navbar-item">
                            <h1 class="title is-4">Help</h1>
                        </a>
                        
                        <a class="navbar-item" href="#/dashboard">
                            <h1 class="title is-4">Demo</h1>
                        </a>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                <h1 class="title is-4">More</h1>
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    <h1 class="title is-5">Contact</h1>
                                </a>
                                <a class="navbar-item">
                                <h1 class="title is-5">Report an issue</h1>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-start">
                        <div class="navbar-item">
                            <div class="buttons">
                            <a class="button is-primary" href='#/signup'>
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-primary is-light" href='#/login'>
                                <strong>Log in</strong>
                            </a>
                            </div>
                        </div>
                    </div>
                    {this.value && 
                        <div>
                            <a href="/"><figure class="image is-64x64" /></a>
                        </div>
                    }
                </div>
            </nav>
            <div class="columns">
                <nav class="navbar"></nav>
            </div>
        </Fragment>
        )
    }
}

export default TabBar;