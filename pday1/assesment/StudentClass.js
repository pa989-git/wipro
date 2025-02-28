import React from 'react';
export class StudentClass extends React.Component {
  render() {
    const { name, address, scores } = this.props;
    return (
      <div>
        <h3>Student (Class Component)</h3>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Scores: {scores.join(', ')}</p>
      </div>
    );
  }
}
