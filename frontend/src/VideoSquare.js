import React, {Component, Fragment} from 'react'
import ClubTabBar from './clubTabBar'
import firebase from "firebase/app";
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


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


function CreateVideoCard(tags) {
    return tags.LonelyPandas.tagContents.forEach(video => {
        <VideosCard title_name={video} image_name="VideoCover1.jpg" likes="50" comments="24"/>
    })
}


class VideoSqure extends Component{
    state = {
        videos: null,
        isSignedIn: false,
    }

    async componentDidUpdate(prevProps, prevState) {
        if (this.state.isSignedIn !== prevState.isSignedIn) {
            const idToken = await firebase.auth().currentUser?.getIdToken()
            // console.log(idToken)

            let backendUrl = 'https://n5g4ytjhec.execute-api.us-east-2.amazonaws.com/dev/'
            if (window.location.href.includes('localhost')) {
                backendUrl = 'http://localhost:4000/dev/'
            }

            const response = await fetch(backendUrl + 'tags', { 
                headers: {'Authorization': idToken}
            })
            if (response.status === 401) {
                return console.log('unauthorized')
            }
            const videosList = await response.json()
            const videoNames = videosList.LonelyPandas.videoNames
            // If you meant to render a collection of children, use an array instead.
            this.setState({videos: videoNames})
        }
    }

    async componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({isSignedIn: !!user})
        );
    }

      // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render(){
        if (!this.state.isSignedIn) {
            return (
              <div style={{margin:"0 auto"}}>
                <h1>Please login</h1>
              </div>
            );
        }
        return(
            <section class="section is-medium">
                <div class="columns is-centered" >
                    {
                        this.state.videos && this.state.videos.map(video => {
                            return <VideosCard title_name={video} image_name="VideoCover1.jpg" likes="50" comments="24"/>
                        })
                    }
                    {/* <VideosCard title_name="My Experience in COVID" image_name="VideoCover1.jpg" likes="50" comments="24"/>
                    <VideosCard title_name="I Am Not Alone Now" image_name="VideoCover2.jpg" likes="34" comments="45"/> */}
                </div>
                <div class="columns is-centered" >
                    { this.state.videos && (() => { 
                        return <Fragment> 
                               <VideosCard title_name="A Lonely Lion, Help Me" image_name="VideoCover3.jpg" likes="49" comments="75"/>
                               <VideosCard title_name="Just Joined For Fun" image_name="VideoCover4.jpg" likes="123" comments="3"/>
                            </Fragment> 
                        })
                    }
                </div>
                <div style={{textAlign:"center"}}> 
                    <a class="button is-link is-light is-large is-rounded is-success" href='#/postVideo'>
                    <h class="title is-3" style={{marginRight:"10px", height: "50%"}}>Try the CBT Journey</h> 
                    <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </section> 
        )
    }
}


class VideoDemo extends Component{
    render(){
        return(
            <div>
                <ClubTabBar clubName="Lonely Pandas"/>
                <VideoSqure />
            </div>
        )
    }
}

export default VideoDemo