import React from 'react';
import FancyBorder from './FancyBorder';

function Dialog(props) {
  return (
    <FancyBorder secret="William">
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  );
}

export default WelcomeDialog;
