import React from 'react';
import './Participants.css';

class Participants extends React.Component {
  render() {

    const participantsOnStage = this.props.usersOnStage;
    const participantsInSession = this.props.usersInSessionNotStaged;
    const participantsFormer = this.props.usersLeftSession;

    const participantsList = [...participantsOnStage, ...participantsInSession, ...participantsFormer];

    const participantDivs = participantsList.map(participant => {

      if (participant.onStage) {
        return (
          <div className="participant">
            <img className='thumbnail' src={participant.avatar} alt={participant.name} />
            <span>{participant.name}</span>
            <p>on stage</p>
          </div>
        );
      }
      else if (participant.inSession) {
        return (
          <div className="participant">
            <img className='thumbnail' src={participant.avatar} alt={participant.name} />
            <span>{participant.name}</span>
            <p>in session</p>
          </div>
        );
      }
      else {
        return (
          <div className="participant">
            <img className='thumbnail' src={participant.avatar} alt={participant.name} />
            <span>{participant.name}</span>
            <p>left session</p>
          </div>
        );
      }

    });

    return participantDivs;

  }
}

export default Participants;
