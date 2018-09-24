import React, { Component } from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

export default class InitialChart extends Component<{}, {}> {
    render() {
         const UAH = [
            {x: '2013', UAH: 8.115192},
            {x: '2014', UAH: 8.78744},
            {x: '2015', UAH: 26.2613},
            {x: '2016', UAH: 26.70492},
            {x: '2017', UAH: 26.927559},
            {x: '2018', UAH: 26.777}
          ];
        return(
            <LineChart width={600} height={300} data={UAH}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="x"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="UAH" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        )
    }
}