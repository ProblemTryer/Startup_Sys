import React, {Component} from 'react'

class App extends Component{
    render(){
        return (
            <div>
                Hello JSPang
            </div>
        )
    }
}

class TabBar extends Component{
    render(){
        return (
            <div class="level-mid">
            <p class="level-item"><strong>All</strong></p>
            <p class="level-item"><a href="">About</a></p>
            <p class="level-item"><a href="">Help</a></p>
            <p class="level-item"><a href="">Features</a></p>
            <p class="level-item"><a href="" class="button is-success">Sign-up</a></p>
          </div>
        )
    }
}

export {App, TabBar};