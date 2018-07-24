import React, { Component, propTypes } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'
// import ChartForm from './chartForm'
import { Checkbox } from './checkBox'


const brickStyle = {
  ...styles.mainPaperStyle,
  margin: 5,
}

const insertElement = (element) => (elementToInsert) => {
  return (
    <div style={{border:'3px solid blue'}}>
      { elementToInsert }
      { element }
    </div>
  )
}

const ChartSetupHOC = (Component, props) => {

  return class ChartSetup extends Component {
    constructor(props) {
      super(props)
      // this.state = {
      //   chartSetup: false
      // }
    }

    clickHandler = () => {
      this.setState({
        // chartSetup: true,
        btnLabel: this.state.bugtnLabel==='chart' ? 'setup' : 'chart'
      })
    }

    makeCurrArr = (n = Object.entries(this.props.currencies).length, style) => {
      let currArr
      // let elementToInsert = <Checkbox />
      return (
        currArr = Object.entries(this.props.currencies).map((key,ind)=>{
          if (n === 5 && ind < 5)
            return (
              <Paper style={style}>{`${key[0]}: ${key[1]}` }</Paper>
            )
          else if (n !== 5 )
            return (
              insertElement(<Paper style={style}>{`${key[0]}: ${key[1]}`}</Paper>)
                (<Checkbox cur={key[0]} val={key[1]} dispatch={this.props.dispatch}/>)
            )
        })
      )
    }

    renderCurrencies = () => {
      if (this.state.btnLabel==='chart') {
      // console.log('propzz in renderCurrencies', this.props);
        return (

            this.makeCurrArr()

        )
      } else
        return this.makeCurrArr(5, brickStyle)
    }

    render() {

      console.log('ChartSetupHOC state, props:', this.state, this.props);

      return (
        <Component
          callback={this.clickHandler}
          btnLabel={this.state.btnLabel}
          {...this.props}
        >
          { this.renderCurrencies(this.props) }

        </Component>
      )
    }
  }
}
export default ChartSetupHOC
