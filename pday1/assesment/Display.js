import React from 'react';
export const Display = ({ name, address, setName, setAddress }) => (
  <div>
    <h3>Display Component</h3>
    <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
    <br />
    <label>Address: <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /></label>
  </div>
);