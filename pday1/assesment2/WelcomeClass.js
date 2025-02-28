import React from 'react';
export class WelcomeClass extends React.Component {
  render() {
    return <h2>Welcome, {this.props.username}!</h2>;
  }
}