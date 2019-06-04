import React, { Component, Children, propTypes } from 'react'
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

   let children = Children.map(this.props.children, (child =>
     React.cloneElement(child, this.props)
   ))

   console.log('this.props.children', this.props);

   return (
    <Paper style={styles.mainPaperStyle} zDepth={1} >
      { children }
    </Paper>
    )
  }
}
