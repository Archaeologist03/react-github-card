import React from 'react';


function SubmitName(props) {

    return (
        <div className="submitName-container">
            <input
                autoFocus={true}
                className="submitName-container__input"
                placeholder="Username + Enter" 
                onChange={props.InputChange}
                onKeyPress={props.InputEnter}
                />
        </div>
    )
}

export default SubmitName;