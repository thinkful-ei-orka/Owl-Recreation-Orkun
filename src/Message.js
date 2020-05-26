import React from 'react';
import STORE from './store';

function Message(props) {
   const person =props.participants.find(person => {
    return person.id === props.id
   } )
    return (
        <div className="message">
            <img className="chat-img" alt={person.name} src={person.avatar}></img>
            <div className="message-body">
                <h5>{person.name}</h5>
                <span className="message-time">{props.chatEvent.time}</span>
                <p>{props.chatEvent.message}</p>
            </div>    
        </div>
        
    )
}


export default Message;