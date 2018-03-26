import React, { Component, propTypes } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

const obj = {
  AED
:
3.673097,
AFN
:
69.375,
ALL
:
105.2,
AMD
:
480,
ANG
:
1.783141,
AOA
:
214.584,
ARS
:
20.1755,
AUD
:
1.299545,
AWG
:
1.784998,
AZN
:
1.7025,
BAM
:
1.582704
}


export default class ExchangeCalculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
     value: 0,
     selectedCurrencyName: '',
    }
  }

  handleSelectedCurrencyChange = (e, ind, value) => {
    this.setState({value})
  }
  render() {

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

    console.log(this.props);

    let currArr = Object.entries(obj).map((key,ind)=>{
      return (
        <MenuItem value={ind} primaryText={key[0]} />
      )
    })

    return (
      <Paper style={calculatorStyle}>
        <div>
          <TextField
          id="tf"
          defaultValue="1"
          style={tfStyle}
          />
          <SelectField
            value = {0}
            floatingLabelText = "Currencies"
            onChange = {this.handleSelectedCurrencyChange}
            menuItemStyle = {{color:'steelblue'}}
            style={{margin:0,width:'auto'}}
          >
          <MenuItem value={0} primaryText='USD' />
          </SelectField>
        </div>

        <div>
          <TextField
          id="tf"
          defaultValue="1"
          style={tfStyle}
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
