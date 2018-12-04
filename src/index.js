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
            fallowers: null,
            fallowing: null,
            public_repos: null,
            url: "",
            inputText: "archaeologist03", 
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);


        
    }

    // Fetch data obj, destructure it and setState to new values from fetched obj
    componentDidMount() {
        if (this.state.login) {
            getApiData(this.state.login).then(data => {
                let {login, avatar_url, bio, fallowers, fallowing, public_repos, url} = data;
                this.setState({
                    login,
                    avatar_url,
                    bio,
                    fallowers,
                    fallowing,
                    public_repos,
                    url,
                })
            });
        }
    }


    handleInputChange(e) {
        let text = e.target.value;
        this.setState({
            inputText: text,
            login: text,
        })
    }

    handleEnterKey(e) {        
        if (e.key === 'Enter') {
            this.setState({
                login: this.state.inputText,
            })
        }
        if (this.state.login && e.key === 'Enter') {
            getApiData(this.state.login).then(data => {
                let {login, avatar_url, bio, fallowers, fallowing, public_repos, url} = data;
                this.setState({
                    login,
                    avatar_url,
                    bio,
                    fallowers,
                    fallowing,
                    public_repos,
                    url,
                })
            });
        }
    }

    render() {
        console.log(this.state.login);
        console.log(this.state.public_repos);
        console.log(this.state.bio);


        return (
            <div 
                className="container">
                <SubmitName 
                    inputText={this.state.inputText}
                    InputChange={this.handleInputChange}
                    InputEnter={this.handleEnterKey}>

                </SubmitName>
                
                <DisplayInfo>

                </DisplayInfo>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)