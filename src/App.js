import React from 'react';
import './App.css';
import STORE from './STORE.js';
import Stage from './components/Stage';
import Bottom from './components/Bottom';
import Top from './components/Top';
import Chat from './components/Chat';
import Participants from './components/Participants';

function App() {
  
  const usersOnStage = STORE.participants.filter(obj => obj.onStage);
  const localUser = STORE.localUser;
  const localUserObj = STORE.participants.filter(obj => obj.id === localUser)[0];
  const numActive = STORE.participants.filter(obj => obj.inSession).length;

  const usersInSessionNotStaged = STORE.participants.filter(obj => obj.inSession && !obj.onStage);
  const usersLeftSession = STORE.participants.filter(obj => !obj.inSession && !obj.onStage);


  return (
    <main className='App'>

      <div className='top'>
      <Top numActive={numActive}></Top>
      </div>

      <div className='chat'>
      {
      STORE.view === 'Participants' && 
      <Participants usersOnStage={usersOnStage} usersInSessionNotStaged={usersInSessionNotStaged} 
      usersLeftSession={usersLeftSession}></Participants>
      }
      {
      STORE.view === 'Chat' && 
      <Chat chatEvents={STORE.chatEvents} participants={STORE.participants}></Chat>
      }
      </div>

      <div className='stage'>
      <Stage usersOnStage={usersOnStage} localUser={localUser}></Stage>
      </div>

      <div className='bottom'>
      <Bottom onStage={localUserObj.onStage}></Bottom>
      </div>

    </main>
  );
}

export default App;