import React, {Component, Fragment} from 'react'
import ClubTabBar from './clubTabBar'


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


class VideosCard extends Component{
    constructor(props) {
        super(props);
        this.image_name = props.image_name
        this.title_name = props.title_name
        this.likes = "  " + props.likes + "  Likes"
        this.comments = "  " + props.comments + "  Comments"
    } 
    render(){
        return (
            <div class="column is-one-third is-fullheight"><a href="#/videoJourney">
                <div class="card is-fullheight">
                <div class="card-image">
                    <figure class="image"> 
                    <img src={this.image_name} style={{height:"350px"}} alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content columns is-centered">
                            <p style={{font:"13px Lucida Handwriting, sans-serif"}}>
                            <p class="title is-3" >{this.title_name}</p></p>
                        </div>
                    </div>
                </div>    
                <div class="columns" style={{float:"left"}}>
                        <p class="column title is-5 is-offset-6">
                            <p class="title is-6" >
                                <img src="like.png" style={{height:"25px", width:"30px"}} alt="Placeholder image" /> 
                                {this.likes}
                            </p>
                        </p>   
                        <p class="column title is-10">
                            <p class="title is-5" >
                                <img src="sent.png" style={{height:"25px", width:"35px"}} alt="Placeholder image" /> 
                                {this.comments}
                            </p>
                        </p>  
                    </div>
                </div>
            </a></div>
        )
    }
}


class VideoDemo extends Component{
    render(){
        return(
            <div>
                <ClubTabBar clubName="Lonely Pandas"/>
                <BrandImage />
                <section class="section is-medium">
                    <div class="columns is-centered" >
                        <VideosCard title_name="My Experience in COVID" image_name="VideoCover1.jpg" likes="50" comments="24"/>
                        <VideosCard title_name="I Am Not Alone Now" image_name="VideoCover2.jpg" likes="34" comments="45"/>
                    </div>
                    <div class="columns is-centered" >
                        <VideosCard title_name="A Lonely Lion, Help Me" image_name="VideoCover3.jpg" likes="49" comments="75"/>
                        <VideosCard title_name="Just Joined For Fun" image_name="VideoCover4.jpg" likes="123" comments="3"/>
                    </div>
                </section>
            </div>
        )
    }
}

export default VideoDemo