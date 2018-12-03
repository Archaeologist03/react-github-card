import React from 'react';

function Avatar(props) {

        // TODO --- figure out what to do with classes for reusability
    return(
        <div className="displayInfo-container__avatar-container">
            <img alt="github profile pic"/>
            <h3 className="displayInfo-container__avatar-container__name">Name</h3>
            <h4 className="displayInfo-container__avatar-container__place">Place..</h4>
        </div>
    )
}

export default Avatar;




