import React from 'react';

function User({ firstName, lastName }) {
  return (
    <h2>
      Hello, {firstName} {lastName}!
    </h2>
  );
}

export default User;
