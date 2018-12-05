import React from 'react';

import Avatar from './displayInfoComponents/Avatar';
import Stats from './displayInfoComponents/Stats';



function DisplayInfo(props) {

    return (

        <div className="displayInfo-container">
            {props.mainState.message ? 
                <p style={{textAlign: "center"}}>User {props.mainState.message}</p> 
                :
                <>
                    <Avatar mainState={props.mainState} />
                    <Stats mainState={props.mainState} />
                </>
            }     
        </div>
    )
}




export default DisplayInfo;
