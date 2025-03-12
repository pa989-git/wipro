import React from 'react';
import Login from './components/Login';
import UserComponent from './components/UserComponent';
import BatchComponent from './components/BatchComponent';

function App() {
  return (
    <div>
      <h1>Batch Management System</h1>
      <Login />
      <UserComponent />
      <BatchComponent />
    </div>
  );
}

export default App;
