import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import * as styles from '../css/mainCSS'
// import SelectField from 'material-ui/SelectField'
// import MenuItem from 'material-ui/MenuItem'
// import TextField from 'material-ui/TextField'


export default class MainPage extends Component {
 constructor(props) {
 super(props)
}
 render() {
   return (
    <Paper style={styles.mainPaperStyle} zDepth={1} >
      {React.cloneElement(this.props.children, this.props)}
    </Paper>
    )
  }
}
