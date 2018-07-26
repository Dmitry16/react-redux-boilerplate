const initialState = {
  selectedCurrencies: {},
}

export function currenciesReducer(state = initialState, action) {
  switch(action.type) {
    case 'CURRENCIES_FETCHED':
      // console.log('currenciesReducer::', action.payload);
      return {
        ...state,
        currencies: action.payload,
        loggedIn: true
      }
    case 'CURRENCY_ADDED':
      return {
        ...state,
        selectedCurrencies:
          {
            ...state.selectedCurrencies,
            [action.cur]: action.val
          },
      }
    case 'CURRENCY_REMOVED':
      delete state.selectedCurrencies[action.cur];
      return state;
    case 'LS_REC_INJ':
      return {
        ...state,
        selectedCurrencies: action.payload
      }
    case 'HISTORY2017_FETCHED':
      return {
        ...state,
        history2017: action.payload,
      }
    case 'HISTORY2016_FETCHED':
      return {
        ...state,
        history2016: action.payload,
      }
    case 'HISTORY2015_FETCHED':
      return {
        ...state,
        history2015: action.payload,
      }
    case 'HISTORY2014_FETCHED':
      return {
        ...state,
        history2014: action.payload,
      }
    case 'HISTORY2013_FETCHED':
      return {
        ...state,
        history2013: action.payload,
      }
    default:
      return state;
  }
}
