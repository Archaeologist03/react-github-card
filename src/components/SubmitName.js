import React from 'react';


function SubmitName(props) {

    // let styles = {
    //     width: "100%",
    //     backgroundColor: "purple",    
    // }
    
    return (
        <div className="submitName-container">
            <input
                autoFocus={true}
                className="submitName-container__input"
                placeholder="Username + Enter" 
                onChange={props.InputChange}
                onKeyPress={props.InputEnter}
                // style={styles}
                />
        </div>
    )
}

export default SubmitName;