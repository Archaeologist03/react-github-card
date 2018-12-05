import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import getApiData from './components/getApiData';

import SubmitName from './components/SubmitName';
import DisplayInfo from './components/DisplayInfo';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            avatar_url: '',
            bio: '',
            followers: null,
            following: null,
            public_repos: null,
            url: "",
            name: "",
            message: "",
            inputText: "archaeologist03",
            enterPressed: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
 
    }

    // Fetch data obj, destructure it and setState to new values from fetched obj
    componentDidMount() {
        // if (this.state.login) {
            getApiData(this.state.inputText).then(data => {
                let {login, avatar_url, bio, followers, following, public_repos, url, name} = data;
                this.setState({
                    login,
                    avatar_url,
                    bio,
                    followers,
                    following,
                    public_repos,
                    url,
                    name,
                })
            });
        // }
        console.log(this.state, 'didmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.url === nextState.url) {
            return false;
        }
        return true;
    }



    handleInputChange(e) {
        let text = e.target.value;
        this.setState({
            inputText: text,
        })
    }

    handleEnterKey(e) {   
        let readyForChange = () => {
            if (this.state.login) {
                getApiData(this.state.login).then(data => {
                    let {login, avatar_url, bio, followers, following, public_repos, url, name, message} = data;
                    console.log(data);
                    this.setState({
                        login,
                        avatar_url,
                        bio,
                        followers,
                        following,
                        public_repos,
                        url,
                        name,
                        message,
                    });

                });
            }
        }

        if (e.key === 'Enter') {
            this.setState({
                login: this.state.inputText,
            }, () => readyForChange())
        }

    }

    

    render() {
        console.log(this.state, 'render');


        return (
            <div 
                className="container">
                <SubmitName 
                    InputChange={this.handleInputChange}
                    InputEnter={this.handleEnterKey}>
                </SubmitName>


                <DisplayInfo
                    mainState={this.state}>

                </DisplayInfo>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)














    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextState, nextState.enterPressed, this.state.enterPressed, )
    //     if (this.state.enterPressed !== nextState.enterPressed) {
    //         return true;
    //     }
    // }