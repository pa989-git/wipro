import React, { useState } from 'react';
import './App.css';
import { LoginClass } from './LoginClass';
import { WelcomeClass } from './WelcomeClass';
import { LoginFunc } from './LoginFunc';
import { WelcomeFunc } from './WelcomeFunc';

function App() {
  const [username, setUsername] = useState("Guest");

  return (
    <div className="App">
      <h1>Hello World</h1>
      <LoginClass username={username} />
      <WelcomeClass username={username} />
      <LoginFunc username={username} />
      <WelcomeFunc username={username} />
    </div>
  );
}

export default App;

