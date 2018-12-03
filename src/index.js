import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

import SubmitName from './components/SubmitName';
import DisplayInfo from './components/DisplayInfo';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
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