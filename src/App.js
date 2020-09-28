import React from 'react';
import './App.css';
import { useCognito } from './cognito';

const App = () => {
  const { user, userManager } = useCognito();
  if (user) {
    return (
      <div className="App">
        <h1>You are logged in!</h1>
        <pre>{JSON.stringify(user.profile, null, 2)}</pre>
        <button onClick={() => userManager.signoutRedirect()}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Please log in</h1>
        <button onClick={() => userManager.signinRedirect()}>Login</button>
      </div>
    );
  }
};

export default App;
