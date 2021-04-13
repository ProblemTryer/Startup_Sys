import React, {Component, Fragment} from 'react'
import ClubTabBar from './clubTabBar'
import ScrollMenu from 'react-horizontal-scrolling-menu';
require("./mycss.css")

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


const Arrow = ({ text, className }) => {
    return (
        <div className={className}> {text} </div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
  

const questions = {
    q1 : "What is the problem?",
    q2 : "What negative thought do you have?", 
    q3 : "Does your thought contain any distortion(s)", 
    q4 : "How can you challenge your thought?", 
    q5 : "What’s another way of thinking about this?"
}


const data = [
    {name: 'item1', image_name: "VideoCover1.jpg", title_name: questions.q1},
    {name: 'item2', image_name: "VideoCover1.jpg", title_name: questions.q2},
    {name: 'item3', image_name: "VideoCover1.jpg", title_name: questions.q3},
    {name: 'item4', image_name: "VideoCover1.jpg", title_name: questions.q4},
    {name: 'item5', image_name: "VideoCover1.jpg", title_name: questions.q5},
    {name: 'item6', image_name: "VideoCover1.jpg", title_name: ""},
    {name: 'item7', image_name: "VideoCover1.jpg", title_name: ""},
]


class VideoCard extends Component{
    constructor(props) {
        super(props);
        this.image_name = props.image_name
        this.title_name = props.title_name
    } 
    render(){
        return (
            <div class="column is-four-fifths is-fullheight"><a href="#/videoJourney">
                <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content columns is-four-fifths is-centered">
                            <p style={{font:"13px Lucida Handwriting, sans-serif"}}>
                            <p class="title is-3" >{this.title_name}</p></p>
                        </div>
                    </div>
                </div> 
                <div class="card-image">
                    <figure class="image"> 
                    <img src={this.image_name} style={{height:"450px"}} alt="Placeholder image" />
                    </figure>
                </div>
                </div>
            </a></div>
        )
    }
}


// All items component
// Important! add unique key
export const Menu = (data, selected) => 
data.map(item => {
    return <VideoCard className={`${selected ? 'active' : ''}`} 
                      key={item.name}
                      title_name={item.title_name} 
                      image_name={item.image_name}/>;
});

const selected = 'item1';

class HorizontalScrollingVideo extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(data, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
    }

    render() {
        const { selected } = this.state;
        const menu = this.menuItems;

        return (
            <ScrollMenu transition={0.4}
            scrollBy={1}
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
            />
        );
    }
}


class VideoJourney extends Component{
    
    render(){
        return(
            <div>
                <ClubTabBar clubName="Lonely Pandas"/>
                <BrandImage />
                <section class="section is-medium" style={{position:"fixed", marginTop:"-2%"}}>
                    <HorizontalScrollingVideo />
                </section>
            </div>
        )
    }
}

export default VideoJourney