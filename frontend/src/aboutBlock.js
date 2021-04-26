import React, {Component} from 'react'

// class Welcome extends React.Component
function RightSection(props){
    return(
        <div>
            <figure class="image is-128x128">
                <img alt='No image' src="logo.png" />
            </figure>
            {/* <strong><h1 class="title is-4">{props.word}</h1></strong> */}
        </div>
    )
}

function LeftSection(props){
    return(
        <div class="tile is-child">
            {/* <div class="column" /><div class="column" /><div class="column" /> */}
            <div class="column" /><div class="column" />
            <article class="tile is-child notification is-white" 
                     style={{backgroundColor: "rgba(255,255,255,.1)", 
                             WebkitBackdropFilter:"blur(10px)", 
                             backdropFilter:"blur(10px)"}}>
                <p class="title is-2" style={{font:"50px Georgia, serif"}}>
                    A safe place to share difficult emotions and improve your mental health
                </p>
                <p class="subtitle"  style={{font:"25px Georgia, serif", float:"right"}}> -- SadPandas</p>
            </article>
            <div align="center" >
                <a class="button is-link is-light is-large is-rounded is-primary" href='#/login'>
                    <h class="title is-3" style={{marginRight:"10px", height: "50%"}}>Log In</h> 
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    )
}


class AboutBlock extends Component{
    render(){
        return (
            <div class="tile is-ancestor">
                <div class="tile is-3 is-parent"></div>
                <div class="tile is-4 is-parent is-vertical">
                    <div class="tile is-child"> </div>
                    <LeftSection> </LeftSection>
                </div>
                {/* <div class="tile is-1 is-parent"></div> */}
                <div class="tile is-3 is-parent is-vertical">
                    <div class="column is-one-quarter" /><div class="column is-one-quarter" />
                    <div class="column is-one-quarter" /><div class="column is-one-quarter" />
                    <div class="column is-one-quarter" /><div class="column is-one-quarter" /><div class="column is-one-quarter" />
                    <RightSection> </RightSection>
                </div>
                <div class="tile is-2 is-parent"></div>
            </div>
        )
    }
}

export default AboutBlock;