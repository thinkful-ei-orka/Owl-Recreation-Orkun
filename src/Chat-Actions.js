import React from 'react';

export default function ChatActions(props) {
    
    const obj = {
        'thumbs-up' : 'gave a thumbs up',
        'thumbs-down' : 'gave a thumbs down',
        'raise-hand' : 'raised their hand',
        'clap' : 'clapped',
        'join' : 'joined',
        'leave' : 'left',
        'join-stage' : 'joined the stage',
        'leave-stage' : 'left the stage',
    }

    const person = props.participants.find(person=> {
       return person.id === props.id
    })
    return(
        <div className="chat-actions">
            <h2>{person.name}</h2>
            <p>{obj[props.chatEvent.type]}</p>
        </div>
    )
}
