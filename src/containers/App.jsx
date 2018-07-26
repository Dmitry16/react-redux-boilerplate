//Libs
import React, { Component, propTypes, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

//APIs,Actions
import { getFromLocalStorage } from '../api/localStorage';
import { lsRecInjection } from '../actions/localStorageActions';
// import { fetchData } from '../actions/fetchDataAction';
import { showInitialDialog } from '../actions/initialDialogActions';

//Assets
import '../css/App.css';
//Components
import ErrorBoundary from '../components/errorBoundary';
import { ContainerMain } from '../components/styled/styled-components/wrappers';
import AuthPage from './authPage';
import MainPage from './mainPage';
import About from '../components/about';
import { Header, Footer } from '../components/header';
import ExchangeCalculator from '../components/exchangeCalculator';
import RatesChart from '../components/ratesChart';

//Material-UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let localStorageRec = getFromLocalStorage();

    if (localStorageRec.length !== 0) {
      // console.log('componentWillMount localStorageRec:', localStorageRec[localStorageRec.length-1]);
      this.props.dispatch(lsRecInjection(localStorageRec[localStorageRec.length-1]));
    }
    // this.props.dispatch(showInitialDialog());
  }

  render() {

  const  { loggedIn, form } = this.props;

    console.log('App render this.props', this.props)

    const renderInit = () => {
      return (
        <MainPage {...this.props}>
          { loggedIn
            ?
              <Fragment>
                <ExchangeCalculator {...this.props} />
                <RatesChart {...this.props} />
              </Fragment>
            :
              <AuthPage />
          }
        </MainPage>
      );
    };

    return (
      <Router>
        <ErrorBoundary>
          <MuiThemeProvider>
            <ContainerMain>
              <Header />
                <Route exact={true} path='/' render={renderInit} />
                <Route path='/about' component={About} />
            </ContainerMain>
          </MuiThemeProvider>
        </ErrorBoundary>
      </Router>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actionCreators, dispatch);
// }

const mapStateToProps = store => ({
    // searchResultsBlockVisible: store.searchResults.visible,
    // initialDialog: store.appConfig.initialDialog,
    form: store.form,
    currencies: store.currency.currencies,
    history: store.currency.history,
    loggedIn: store.currency.loggedIn,
    selectedCurrencies: store.currency.selectedCurrencies
  });

export default connect(mapStateToProps)(App)
