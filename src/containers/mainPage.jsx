import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'

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

export default class MainPage extends Component {
 constructor(props) {
 super(props)
 }

 render() {
   console.log(this.props);

   let currArr = Object.entries(obj)
   console.log('Object.entries:',currArr)

   // {React.cloneElement(this.props.children, this.props)}
   return (
    <Paper style={styles.mainPaperStyle} zDepth={1} >
      <h3>zzzzz</h3>
    </Paper>
    )
  }
}
