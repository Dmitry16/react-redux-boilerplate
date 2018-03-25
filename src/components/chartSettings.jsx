import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'

const ChartSettingsHOC = (Chart) => {

  return class ChartSettings extends Component {

    render() {
      console.log('holaaaaaa')
      return (
        <Chart {...this.props} />
      )
    }
  }
}
export default ChartSettingsHOC
