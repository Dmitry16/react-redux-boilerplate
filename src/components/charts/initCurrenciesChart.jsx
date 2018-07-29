import React, { Component } from 'react';
import {curveCatmullRom} from 'd3-shape';
import * as data from '../../data/chartData';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';

export default class InitCurrenciesChart extends Component {

  // makeDataForChart = (cur) => {
  //   let data = [];
  //   for (let i = 0; i < this.props.history.length - 1; i++) {
  //     data.push(this.props.history[i][cur]);
  //   }
  //   return data;
  // }

  render() {

    // console.log('renderrrr1', this.makeDataForChart('UAH'));
    // const data = Object.entries(this.props.history).reduce((acc, cur, i) => {
    //   // console.log('reduuuuce', Object.keys(cur));
    //   // let n = cur['UAH'];
    //   acc[i] = cur;
    //   return acc;
    // }, []);
    // const data = this.props.history.map(key => Object.keys(key));

    console.log('renderrrrr2', this.props.history[0]['UAH']);
    // console.log('renderrrrr3', this.props.history[1]['UAH']);
    // console.log('renderrrrr4', this.props.history[2]['UAH']);

    return (
      <XYPlot
        width={500}
        height={300}>
        <HorizontalGridLines style={{stroke: '#B7E9ED'}}/>
        <VerticalGridLines style={{stroke: '#B7E9ED'}}/>
        <XAxis title="Timeline" style={{
          line: {stroke: '#ADDDE1'},
          ticks: {stroke: '#ADDDE1'},
          text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
        }}/>
        <YAxis title="Values" />
        <LineSeries
          className="hrivna"
          curve={'curveMonotoneX'}
          data={data.UAH}
          style={{
            color:'blue',
            strokeLinejoin: 'round',
            strokeWidth: 4
          }}
        />
        <LineSeries
          className="second-series"
          data={null}/>
        <LineSeries
          className="third-series"
          curve={'curveMonotoneX'}
          strokeDasharray="3 4"
          data={[
            {x: 1, y: 10},
            {x: 2, y: 4},
            {x: 3, y: 2},
            {x: 4, y: 15}
          ]}
          strokeDasharray="7, 3"
          />
        <LineSeries
          className="fourth-series"
          curve={curveCatmullRom.alpha(0.5)}
          data={[
            {x: 1, y: 7},
            {x: 2, y: 11},
            {x: 3, y: 9},
            {x: 4, y: 2}
          ]}/>
      </XYPlot>
    );
  }
}
