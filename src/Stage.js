import React from 'react';
//Loop through STORE, find those whose onStage prop is true, then put them on stage. 

function Stage(props) {
    return (
            <li>
                <h4>{props.name}</h4>
                <img src={props.avatar}></img>
            </li>
    )
}

export default Stage;