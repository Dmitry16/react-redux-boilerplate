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
    <Paper style={{margin: '3px'}}>
      { elementToInsert }
      { element }
    </Paper>
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
        btnLabel: this.state.btnLabel==='chart' ? 'setup' : 'chart'
      })
    }

    checkIfMarked = cur => cur in this.props.selectedCurrencies;

    makeCurrArr = (n = Object.entries(this.props.currencies).length, style) => {
      // console.log('makeCurrArr n:', n);
      let currArr, currencies, selectedCurrencies;
      selectedCurrencies = Object.keys(this.props.selectedCurrencies);
      // let elementToInsert = <Checkbox />
      if (selectedCurrencies.length > 0 && this.state.btnLabel === 'setup') {

        currencies = this.props.selectedCurrencies;

      } else {

        currencies = this.props.currencies;

      }
      return (
        currArr = Object.entries(currencies).map((key,ind) => {
          if (n === 5 && ind < 5)
            return (
              <Paper style={style}>{`${key[0]}: ${key[1]}` }</Paper>
            )
          else if (this.state.btnLabel === 'chart' && ind < Object.entries(currencies).length)
            return (
              insertElement(<Paper style={style}>{`${key[0]}: ${key[1]}`}</Paper>)
                (<Checkbox cur={key[0]} val={key[1]} dispatch={this.props.dispatch}
                  marked={this.checkIfMarked(key[0])}/>)
            )
          else if (n === Object.entries(currencies).length && ind < Object.entries(currencies).length)
            return (
              <Paper style={style}>{`${key[0]}: ${key[1]}` }</Paper>
            )
        })
      )
    }

    renderCurrencies = () => {
      if (this.state.btnLabel==='chart') {
      // console.log('propzz in renderCurrencies', this.props);
        return (
            this.makeCurrArr(Object.entries(this.props.currencies).length, brickStyle)
        );
      } else if (Object.keys(this.props.selectedCurrencies).length > 0) {

        return this.makeCurrArr(Object.keys(this.props.selectedCurrencies).length, brickStyle);

      } else {

        return this.makeCurrArr(5, brickStyle);
      }
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
