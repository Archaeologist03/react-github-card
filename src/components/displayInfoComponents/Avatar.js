import React from 'react';

function Avatar(props) {

        // TODO --- figure out what to do with classes for reusability
    return(
        <div className="displayInfo-container__avatar-container">
            <img alt="github profile pic" src={props.mainState.avatar_url}/>
            <h3 className="displayInfo-container__avatar-container__name">{props.mainState.name}</h3>
            <h3 className="displayInfo-container__avatar-container__bio">{props.mainState.bio}</h3>
        </div>
    )
}

export default Avatar;




