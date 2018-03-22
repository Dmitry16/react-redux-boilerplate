import React, { Component, Fragment } from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTripDetails: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (mapped_list) => {
      this.props.callback(mapped_list);
  }

  render() {
    console.log('%c state in SearchList:::','color:blue;',this.state);

    const additionalInfoStyle = {
      fontSize: '12px',
      color: 'steelblue',
    }
    const listItemStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
    const divTotalStyle = {
      color: 'white',
      fontWeight: 100,
      background: 'lightgray',
      padding: '10px 2px',
      margin: '8px 0 -10px',
    }
    return (
      <List>

        <h3>kuku!</h3>

      </List>
    )
  }
}
