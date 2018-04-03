import React, { Component } from 'react';

export class Checkbox extends Component {
  constructor() {
    super();
     this.state = {
       checked: false
     }
  }
  handleChange = () => {
    console.log('kukuuuuu!');
  }

  render() {

    return (
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
    );
  }
}
