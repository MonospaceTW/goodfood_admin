import React from 'react';

const UserManager = ({changePage}) =>
  <div>
    <button onClick={() => changePage('Home')}>
      Go to Home
    </button>
    <h1>User Manager Scene</h1>
  </div>

export default UserManager;
