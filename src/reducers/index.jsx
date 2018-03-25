import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import searchResultsReducer from './searchResultsReducer'
// import searchOptionsReducer from './searchOptionsReducer'
import appConfigReducer from './appConfigReducer'

import { reducer as formReducer } from 'redux-form'
import currencyReducer from './currencyReducer'

export default combineReducers({
  searchResults: searchResultsReducer,
  // searchOptions: searchOptionsReducer,
  appConfig: appConfigReducer,
  form: formReducer,
  currency: currencyReducer,
  routing: routerReducer
})
