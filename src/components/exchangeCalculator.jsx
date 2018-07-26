import React, { Component, propTypes } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

export default class ExchangeCalculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
     value: 0,
     selectedCurrencyName: '',
     usdQuantity: 1,
     currencyQuantity: 1,
    }
  }

  handleSelectedCurrencyChange = (e, ind, value) => {
    this.setState({value})
  }

  calculateChange = () => {
    if (this.state.usdQuantity !== '' && this.state.currencyQuantity !== '') {
      const change = this.state.usdQuantity * this.state.currencyQuantity;
      console.log('calculateChange:', change);
    }
  }

  handleChange = (e) => {
    // console.log('handleChange', e.target);
    this.setState({
      [e.target.id]: e.target.value
    });
    // this.calculateChange();
  }

  componentDidUpdate() {
    this.calculateChange();
  }

  render() {

    const { currencies } = this.props;
    // console.log('exchangeCalculator render', this.props);
    const calculatorStyle = {
      ...styles.mainPaperStyle,
      margin: 0,
      padding: 0,
      alignItems: 'baseline'
    }
    const tfStyle = {
      margin: 20,
      marginBottom: 0,
      width: 25
    }

    let currArr = Object.entries(currencies).map((key,ind)=>{
      return (
        <MenuItem value={ind} primaryText={key[0]} />
      )
    })

    return (
      <Paper style={calculatorStyle}>
        <div>
          <TextField
          id="usdQuantity"
          value={this.state.usdQuantity}
          style={tfStyle}
          onChange={this.handleChange}
          />
          <SelectField
            value = {0}
            floatingLabelText = "Currency"
            onChange = {this.handleSelectedCurrencyChange}
            menuItemStyle = {{color:'steelblue'}}
            style={{margin:0,width:'auto'}}
          >
          <MenuItem value={0} primaryText='USD' />
          </SelectField>
        </div>

        <div>
          <TextField
          id="currencyQuantity"
          value={this.state.currencyQuantity}
          style={tfStyle}
          onChange={this.handleChange}
          />
          <SelectField
            value = {this.state.value}
            floatingLabelText = "Currencies"
            onChange = {this.handleSelectedCurrencyChange}
            menuItemStyle = {{color:'steelblue'}}
            style={{width:'auto'}}
          >
            { currArr }
          </SelectField>
        </div>
      </Paper>
    )
  }
}
