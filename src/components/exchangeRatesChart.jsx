import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'
import ChartSettingsHOC from './chartSettings'

class ExchangeRatesChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    console.log('this.props in Chart',this.props);

    const chartStyle = {
      ...styles.mainPaperStyle,
      alignItems: 'baseline'
    }
    const brickStyle = {
      ...styles.mainPaperStyle,
      margin: 5
    }

    let currArr = Object.entries(this.props.currencies).map((key,ind)=>{
      if (ind<=10)
        return (
          <Paper style={brickStyle}>{`${key[0]}: ${key[1]}`}</Paper>
        )
    })

     return(
      <Paper style={chartStyle}>
        { currArr }
      </Paper>
     )
  }
}

export default ChartSettingsHOC(ExchangeRatesChart)
