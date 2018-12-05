import React from 'react';


function Stats(props) {

    // TODO --- figure out what to do with classes for reusability
    return (      
        <div className="displayInfo-container__stats-container">
            <div className="displayInfo-container__stats-container__followers-container">
                <p className="statsNumbers">{props.mainState.followers}</p>
                <p className="statsText">fallowers</p>
            </div>
            <div className="displayInfo-container__stats-container__repos-container">
                <p className="statsNumbers">{props.mainState.public_repos}</p>
                <p className="statsText">repos</p>
            </div>
            <div className="displayInfo-container__stats-container__following-container">
                <p className="statsNumbers">{props.mainState.followers}</p>
                <p className="statsText">following</p>
            </div>
        </div>
    )
}
 
export default Stats;
 
