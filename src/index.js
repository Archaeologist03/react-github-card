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
            url: ""  
        };
    }

    // Fetch data obj, destructure it and setState to new values from fetched obj
    componentDidMount() {
        getApiData().then(data => {
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

    render() {
        console.log(this.state.login);
        return (
            <div 
                className="container">
                <SubmitName>

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