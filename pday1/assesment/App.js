import React, { useState } from 'react';
import './App.css';
import { First } from './First';
import { Second } from './Second';
import { Third } from './Third';
import { Fourth } from './Fourth';
import { First1 } from './First1';
import { Second1 } from './Second1';
import { Third1 } from './Third1';
import { Fourth1 } from './Fourth1';
import { StudentFunc } from './StudentFunc';
import { StudentClass } from './StudentClass';
import { Display } from './Display';

function App() {
  const [name, setName] = useState("John Doe");
  const [address, setAddress] = useState("123 Street");
  const scores = [90, 85, 88];

  const sayHello = () => alert("Hello!");
  const sayBye = () => alert("Bye!");

  return (
    <div className="App">
      <h1>Hello World</h1>
      <First /> <Second /> <Third /> <Fourth />
      <First1 /> <Second1 /> <Third1 /> <Fourth1 />
      <StudentFunc name={name} address={address} scores={scores} />
      <StudentClass name={name} address={address} scores={scores} />
      <Display name={name} address={address} setName={setName} setAddress={setAddress} />
      <button onClick={sayHello}>Say Hello</button>
      <button onClick={sayBye}>Say Bye</button>
    </div>
  );
}

export default App;

