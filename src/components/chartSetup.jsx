import React, { Component, propTypes } from 'react'
import Paper from 'material-ui/Paper'

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


const ChartSetupHOC = (Component, style) => {

  return class ChartSetup extends Component {
    constructor(props) {
      super(props)
      // this.state = {
      //   chartSetup: false
      // }
    }

    clickHandler = () => {
      this.setState({
        chartSetup: true,
        btnLabel: this.state.btnLabel==='chart' ? 'setup' : 'chart'
      })
    }

    render() {

      console.log('ChartSetupHOC:', this.state);

      let currArr = Object.entries(obj).map((key,ind)=>{
          return (
            <Paper style={style}>{`${key[0]}: ${key[1]}`}</Paper>
          )
      })

      return (
        <Component
          callback={this.clickHandler}
          btnLabel={this.state.btnLabel}
          {...this.props}
        >
          { currArr }
        </Component>
      )
    }
  }
}
export default ChartSetupHOC
