import React from 'react';


function SubmitName(props) {

    return (
        <div className="submitName-container">
            <input
                className="submitName-container__input"
                placeholder="Username + Enter" 
                value={props.inputText}
                onChange={props.InputChange}
                onKeyPress={props.InputEnter}
                />
        </div>
    )
}

export default SubmitName;