import React from 'react';

function Participant(props) {
    let sessionText;
    if(props.inSession) {
        sessionText = 'in session';
    }
    else {
        sessionText = 'not in session';
    }
    return (
        <li>
            <h4>{props.name}</h4>
            <img src={props.avatar}></img>
            <p>{sessionText}</p>
            <p>{props.onStage ? 'on stage': 'not on stage'}</p>
        </li>  
    )
}

export default Participant;