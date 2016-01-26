import React from 'react';
import styles from './styles/main.css'

const Zuul = React.createClass({
  render() {
    return <p>I am Zuul. Are you the {this.props.name}?</p>
  }
});

React.render(<Zuul name="gatekeeper"/>, document.body);
