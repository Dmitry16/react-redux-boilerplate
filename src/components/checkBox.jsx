import React, { Component } from 'react';

export class Checkbox extends Component {
  constructor() {
    super();
     this.state = {
       checked: false
     }
  }
  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    });
    console.log('kukuuuuu!', this.refs.checkBox.checked);
  }

  render() {

    return (
        <input
          type="checkbox"
          ref='checkBox'
          checked={this.state.checked}
          onChange={this.handleChange}
        />
    );
  }
}
