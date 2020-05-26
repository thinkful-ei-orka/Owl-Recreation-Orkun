import React from 'react';
import STORE from './store';
import Participant from './Participant';
import Stage from './Stage';
import Message from './Message';
import ChatActions from './Chat-Actions';


function App() {
  let filtered = STORE.participants.filter(participant => participant.onStage===true)

  let participants = STORE.chatEvents.filter(person => person.participantId === STORE.participants.map(e => e.id))

  let chatEvents = STORE.chatEvents.map(item => item)
  
  
  return (
    <main className='App'>
      <section className="App-participants">
        <ul>
        {STORE.participants.map(participant => <Participant key={participant.id} name={participant.name} avatar ={participant.avatar} inSession={participant.inSession} onStage={participant.onStage}>
        </Participant>)}
        </ul>
      </section>
      <section className="on-stage">
        <ul>
          {filtered.map(participant => <Stage
          name={participant.name} avatar = {participant.avatar} key={participant.id}>
          </Stage>)}
        </ul>
      </section>
      <section className="chat">
      {STORE.chatEvents.map(item=> item.type ==='message' ? <Message participants={STORE.participants} id={item.participantId} chatEvent={item} key={item.participantId}/> : <ChatActions id={item.participantId} chatEvent={item} participants={STORE.participants} key={item.participantId}/>)}    
      </section>
    </main>
  );
}

export default App;