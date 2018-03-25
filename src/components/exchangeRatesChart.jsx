import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'

export default class ExchangeRatesChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    console.log('this.props in Chart',this.props);

    const chartStyle = {
      ...styles.mainPaperStyle,
      alignItems: 'baseline'
    }

     return(
      <Paper style={chartStyle}>
        <h1>KUKU!</h1>
      </Paper>
     )
  }
}
