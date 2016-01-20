import React from 'react';

const Zuul = React.createClass({
  render() {
    return <p>Are you the {this.props.name}?</p>
  }
});

React.render(<Zuul name="gatekeeper"/>, document.body);
