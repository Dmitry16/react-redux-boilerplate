import React, { Component, Fragment } from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import RaisedButton from 'material-ui/RaisedButton';
import * as styles from '../css/mainCSS';

export default class SearchDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      visible: true,
    })
  }

  render() {

    const detailsStyle = {
      ...styles.additionalInfoStyle,
      fontSize: '15',
    }
    return (
      <List>
        <h2 style={styles.h2Style}> Route details </h2><br />
      </List>
    )
  }
}
