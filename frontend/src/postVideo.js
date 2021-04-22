import React, {Component, Fragment} from 'react'
import ClubTabBar from './clubTabBar'
import firebase from "firebase/app";
import { Button, Checkbox, Form } from 'semantic-ui-react'


class InputForm extends Component{
    state = {
        isSignedIn: false,
        idtoken: null,
        club_name: "Lonely Pandas",
        title: "",
        question_index: "P1",
        time_stamp: Date.now(),
        data: '',
        retrieve: ''
    }

    async componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({isSignedIn: !!user} )
        );
    }

      // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    async putVideo() {
        if(this.state.isSignedIn){
            const idToken = await firebase.auth().currentUser?.getIdToken()
            let backendUrl = 'https://n5g4ytjhec.execute-api.us-east-2.amazonaws.com/dev/'
            // if (window.location.href.includes('localhost')) {
            //     backendUrl = 'http://localhost:4000/dev/'
            // }
            const response = await fetch(backendUrl + 'putVideo', { 
                method: 'POST',
                headers: {'Authorization': idToken},
                body: JSON.stringify({
                    club_name: this.state.club_name,
                    title: this.state.title,
                    question_index: this.state.question_index,
                    time_stamp: this.state.time_stamp,
                    data: this.state.data
                })
            })
        }
    }

    async getVideo() {
        if(this.state.isSignedIn){
            const idToken = await firebase.auth().currentUser?.getIdToken()
            let backendUrl = 'https://n5g4ytjhec.execute-api.us-east-2.amazonaws.com/dev/'
            // if (window.location.href.includes('localhost')) {
            //     backendUrl = 'http://localhost:4000/dev/'
            // }
            const response = await fetch(backendUrl + 'getVideo', { 
                method: 'GET',
                headers: {'Authorization': idToken},
                extraData: JSON.stringify({
                    club_name: this.state.club_name,
                    title: this.state.title,
                    question_index: this.state.question_index,
                    time_stamp: this.state.time_stamp,
                    data: this.state.data
                })
            }).then(function(data) {
                return data.json()
            })
            this.setState({
                retrieve: "Title: " + response.title
            })
        }
    }

    titleChange(e){
        this.setState({
            title: e.target.value
        })
    }
    dataChange(e){
        this.setState({
            data: e.target.value
        })
    }

    render(){
        if (!this.state.isSignedIn) {
            return (
              <div style={{textAlign:"left"}}>
                <h1>Please login</h1>
              </div>
            );
        }
        return(
            <div>
                <section class="section is-medium"> 
                <div class="container is-widescreen">
                    <div class="columns is-centered" >
                        <div class="notification is-primary">
                            <strong>A Put() Example In TEXT Form</strong>
                        </div>
                    </div>
                    {/* https://react.semantic-ui.com/collections/form/#types-form */}
                    <form class="ui form">
                        <div class="equal width fields">
                        <div class="field"><label>ClubName</label><input placeholder= {this.state.club_name + " (Read only)" } readOnly /></div>
                        <div class="field"><label>Question Index</label><input placeholder= {this.state.question_index + " (Read only)" } readOnly /></div>
                        </div>
                        <div class="field">
                            <label>title</label>
                            <input value={this.state.title} placeholder="title" onChange={this.titleChange.bind(this)}/>
                        </div>
                        <div class="field">
                            <label>Data</label>
                            <input value={this.state.data} placeholder="Any data you want" onChange={this.dataChange.bind(this)}/>
                        </div>
                        <div class="field">
                            <div class="ui checkbox">
                                <input type="checkbox" class="hidden" readOnly="" tabIndex="0"/>
                                <label>I agree to the Terms and Conditions</label>
                            </div>
                        </div>
                        <button type="submit" onClick={this.putVideo.bind(this)} class="ui button">Submit</button>
                        <button type="submit" onClick={this.getVideo.bind(this)} class="ui button">Retrieve</button>
                        <textarea class="textarea" disabled value={this.state.retrieve}></textarea>
                    </form>
                </div>
                </section>
            </div>
        )
    }
}


class PostVideo extends Component{
    render(){
        return(
            <div>
                <ClubTabBar clubName="Lonely Pandas"/>
                <InputForm /> 
            </div>
        )
    }
}

export default PostVideo