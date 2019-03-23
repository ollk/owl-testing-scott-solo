import React from 'react';
import './Chat.css';



class Chat extends React.Component {
  render() {
    
    const chatEvents = this.props.chatEvents;
    const participants = this.props.participants;

    const chatTextBoxes = chatEvents.map(event => {
      const speaker = participants.find(ele => ele.id === event.participantId);
      switch(event.type) {
        case 'message' :
          return (
           <div className="chatEvent">
              <img className='thumbnail' src={speaker.avatar} alt={speaker.name} />
              <span>{speaker.name}</span>
              <p>{event.message}</p>
            </div>
          );
        case 'thumbs-up' :
          return (
            <div className="chatEvent">
              <p>{speaker.name} gave a thumbs up</p>
            </div>
          );
        case 'thumbs-down' :
          return (
            <div className="chatEvent">
              <p>{speaker.name} gave a thumbs down</p>
            </div>
          );
        case 'raise-hand' :
          return (
            <div className="chatEvent">
              <p>{speaker.name} raised their hand</p>
            </div>
          );
        case 'clap' :
          return (
            <div className="chatEvent">
              <p>{speaker.name} clapped</p>
            </div>
          );
        case 'join' :
          return (
            <div className="chatEvent">
              <p>{speaker.name} joined</p>
            </div>
          );
        case 'leave' :
          return (
            <div className="chatEvent">
              <p>{speaker.name} left</p>
            </div>
          );
        case 'join-staqe' :
          return (
            <div className="chatEvent">
              <p>{speaker.name} joined the stage</p>
            </div>
          );
        case 'leave-stage' :
          return (
            <div className="chatEvent">
              <p>{speaker.name} left the stage</p>
            </div>
          );
        default :
          return (
            <p>unknown chat event</p>
          );
          
      }
    });

    return chatTextBoxes;
  }
}

export default Chat;