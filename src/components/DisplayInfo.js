import React from 'react';

import Avatar from './displayInfoComponents/Avatar';
import Stats from './displayInfoComponents/Stats';



function DisplayInfo(props) {

    return (
        <div className="displayInfo-container">
            <Avatar />
            <Stats />
        </div>
    )
}




export default DisplayInfo;
