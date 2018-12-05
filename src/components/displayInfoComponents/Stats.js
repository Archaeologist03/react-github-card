import React from 'react';


function Stats(props) {

    // TODO --- figure out what to do with classes for reusability
    return (      
        <div className="displayInfo-container__stats-container">
            <div className="displayInfo-container__stats-container__followers-container">
                fallowers: {props.mainState.followers}
            </div>
            <div className="displayInfo-container__stats-container__repo-container">
                repos: {props.mainState.public_repos}
            </div>
            <div className="displayInfo-container__stats-container__following-container">
                following: {props.mainState.following}
            </div>
        </div>
    )
}
 
export default Stats;
 
