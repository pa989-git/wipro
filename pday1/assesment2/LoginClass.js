import React from 'react';
export class LoginClass extends React.Component {
  render() {
    return (
      <div>
        <h2>Login (Class Component)</h2>
        <p>Username: {this.props.username}</p>
      </div>
    );
  }
}
