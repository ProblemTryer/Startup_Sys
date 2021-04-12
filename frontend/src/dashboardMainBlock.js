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


class ClubsCard extends Component{
    constructor(props) {
        super(props);
        this.image_name = props.image_name
        this.text = props.text
        this.club_name = props.club_name
        // this.path = '#/%s' + this.club_name
        this.path = "#/videoDemo"
    } 
    render(){
        return (
            <div class="column is-one-fifth is-fullheight">
                <div class="card is-fullheight">
                <div class="card-image">
                    <figure class="image"> 
                    <img src={this.image_name} style={{height:"256px"}} alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content columns is-centered">
                            <p style={{font:"13px Lucida Handwriting, sans-serif"}}>
                            <p class="title is-3" >{this.club_name}</p></p>
                        </div>
                    </div>
                    <div class="block">
                    <h class="title is-5">{this.text}</h>          
                    </div>
                    <div align="center">
                        <a class="button is-large is-rounded is-primary is-light" href={this.path}>
                        <p style={{font:"13px Garamond"}}>
                        <h class="title is-3" style={{marginRight:"10px", height: "50%"}}>
                            Join!
                        </h> </p>
                        <i class="fas fa-plane-departure"></i>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


class DashboardClubs extends Component{
    constructor(props) {
        super(props);
        this.image_name = props.image_name
    } 

    render(){
        return (
            <section class="section is-medium">
                <div class="columns is-centered" >
                    <ClubsCard club_name="Heart Broken Pandas" image_name="club1.png" text="Pouring out feelings is helpful for mental health"/>
                    <ClubsCard club_name="Lost Loved Ones Pandas" image_name="club2.png" text="CBT has been proven to improve mental health"/>
                    <ClubsCard club_name="Lonely Pandas" image_name="club4.png" text="Fight social anxiety toghter! "/>
                    <ClubsCard club_name="Awkard Pandas" image_name="club3.png" text="Express yourself and get rid of social awkard"/>
                </div>
            </section>
        )
    }
}



class DashboardMainBlock extends Component{
    render(){
        return (
            <div>
                <BrandImage />
                <DashboardClubs />
            </div>
        )
    }
}

export default DashboardMainBlock;