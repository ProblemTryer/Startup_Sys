import React, {Component, Fragment} from 'react'
import TabBar from './tabBar'

import firebase from "firebase/app";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

var firebaseui = require('firebaseui');
var firebaseConfig = {
    apiKey: "AIzaSyCVN-bAR9d9PjwuhofMG1jr7WOHgDbQfYE",
    authDomain: "sadpandas-81a75.firebaseapp.com",
    projectId: "sadpandas-81a75",
    storageBucket: "sadpandas-81a75.appspot.com",
    messagingSenderId: "205876765134",
    appId: "1:205876765134:web:b0443ea445544a916e4b9f",
    measurementId: "G-4V03H5QDR4"
};
firebase.initializeApp(firebaseConfig);


class InputUserNameAndPw extends Component{
    constructor(props) {
        super(props);
        this.text  = props.text;
    } 
    render(){
        return(
            <div class="column is-4 is-offset-one-third">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input is-primary" type="email" placeholder="Email"/>
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        {/* <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span> */}
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input is-primary" type="password" placeholder="Password" />
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="column" />
                <div align="center" >
                <a class="button is-link is-light is-large is-rounded is-success" href='#/login'>
                    <h class="title is-3" style={{marginRight:"10px", height: "50%"}}>{this.text}</h> 
                    <i class="fas fa-arrow-right"></i>
                </a>
                </div>
            </div>
        )
    }
}


class SignEDInScreen extends React.Component {
    render() {
      return (
        <div align="center" >
            <h1 class="title is-5">Hi, {firebase.auth().currentUser.displayName}</h1>
            <h1 class="title is-5">You are already Logged in</h1>
            <a class="button is-link is-light is-large is-rounded is-success" href='#/dashboard'>
                <h class="title is-3" style={{marginRight:"10px", height: "50%"}}>Go to the demo</h> 
                <i class="fas fa-arrow-right"></i>
            </a>
            <div>
                <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
            </div>
        </div>
      );
    }
}


class LoginLogo extends React.Component {
    render() {
      return (
        <div>
            <div class="column" /><div class="column" />
            <div>
                <figure class="image" style={{width:'300px', height:'300px', position: 'relative', right:'0', left:'0', margin:'0 auto'}}>
                    <img alt='No image' src="login logo.png" />
                </figure>
            </div>
        </div>
        );
    }
}


class SignInScreen extends React.Component {
    // The component's Local state.
    state = {
      isSignedIn: false // Local signed-in state.
    };
   
    // Configure FirebaseUI.
    uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '#/login',
        signInOptions: [
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                // signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
                signInMethod: firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
                requireDisplayName: false
            },
            {
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            },
        ],
    };
    
    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
      this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
          (user) => this.setState({isSignedIn: !!user})
      );
    }
    
    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
      this.unregisterAuthObserver();
    }
   
    render() {
      if (!this.state.isSignedIn) {
        return (
            <div>
                <LoginLogo />
                {/* <InputUserNameAndPw text={this.text}/> */}
                {/* <SignInScreen /> */}
                <div id="firebaseui-auth-container"></div>
                <div id='loader'>loading...</div>
                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
        );
      }
      return (
        <div>
            <LoginLogo />
            <SignEDInScreen />
        </div>
      );
    }
}


class Login extends Component{
    constructor(props) {
        super(props);
        this.text  = props.text;
    } 
    render(){
        return(
            <div>
                <TabBar value={true}/>
                <SignInScreen/>
            </div>
        )
    }
}

export {Login, SignInScreen}


