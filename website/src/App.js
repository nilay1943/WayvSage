import React from 'react';
import './App.css'
import  {Button, ButtonGroup }  from 'reactstrap';

function App() {
  return (

      <div id="hero">

      <h1 id='title'> Wayv $age Hub </h1>
      <ButtonGroup className="gallery">
        <div className="column">
        <Button id="soundcloud" onClick={() => window.location='https://soundcloud.com/wayvsage'}></Button>
        </div>
        <div className="column">
        <Button id="spotify" onClick={() => window.location='https://open.spotify.com/artist/1FBibpKxMFn0pxeJgueDJi'}></Button>
        </div>
      </ButtonGroup>
      </div>
  );
}

export default App;
