import React, { Component } from 'react';
import { addCurrency, removeCurrency } from '../actions/currenciesActions';

export class Checkbox extends Component {
  constructor(props) {
    super(props);
     this.state = {
       checked: this.props.marked
     }
  }
  handleChange = () => {
    const { cur, val, dispatch } = this.props;
    this.setState({
      checked: !this.state.checked
    });
    // console.log('kukuuuuu!', this.refs.checkBox.checked);
    if (this.refs.checkBox.checked)
      dispatch(addCurrency(cur, val));
    if (!this.refs.checkBox.checked) {
      dispatch(removeCurrency(cur, val));
      // console.log(this.props.cur);
    }
  }

  render() {

    // console.log('checkbox propzz', this.props);
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
