import React, { Component } from 'react';
import { addCurrency, removeCurrency } from '../actions/currenciesActions';

export class Checkbox extends Component {
  constructor(props) {
    super(props);
     this.state = {
       checked: false
     }
  }
  handleChange = () => {
    const { cur, val } = this.props;
    this.setState({
      checked: !this.state.checked
    });
    // console.log('kukuuuuu!', this.refs.checkBox.checked);
    if (this.refs.checkBox.checked)
      addCurrency(cur, val);
    if (!this.refs.checkBox.checked) {
      removeCurrency(cur, val);
      // console.log(this.props.cur);
    }
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
