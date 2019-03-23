import React, { Component } from 'react';
import './App.css';

import User from './User';
import Welcome from './Dialog';

import ReactPlayer from 'react-player';

class App extends Component {
  logger2 = () => {
    console.log('This is the second logger');
  };

  render() {
    const formatName = user => {
      return `${user.firstName} ${user.lastName}`;
    };

    const logger = () => {
      console.log('Im playying');
    };

    const displayAvartar = ({ avatarUrl }) => {
      return avatarUrl ? (
        <img src={avatarUrl} />
      ) : (
        <img src="https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png" />
      );
    };

    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
    };

    const element = <h2>Hello, {formatName(user)}!</h2>;

    return (
      <div className="App">
        <User firstName="Harper" lastName="Bruce" user={user} />
        <User firstName="Francisco" />
        <User lastName="Johnson" />
        <p>END OF FUNCTIONAL</p>
        {/* <h1> Hello Ironhackers! </h1> */}
        {element}
        {/* {displayAvartar(user)} */}
        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

        <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
          onPlay={logger}
          onStart={this.logger2}
        />

        <Welcome />
      </div>
    );
  }
}

export default App;
