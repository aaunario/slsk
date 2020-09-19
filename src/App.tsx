import React from 'react';
import './App.css';
import NewGame from './containers/NewGame'
import NewPlayer from './containers/NewPlayer';
import TeamLineupsContainer from './containers/TeamLineupsContainer';

function App(props) {
  return (
    <div className="App">
      <NewGame/>
      <NewPlayer/>
      <TeamLineupsContainer/>
    </div>
  );
}

export default App;
