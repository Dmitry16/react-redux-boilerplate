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
    case 'LS_REC_INJ':
      return {
        ...state,
        selectedCurrencies: action.payload
      }
    case 'CURRENCY_REMOVED':
      delete state.selectedCurrencies[action.cur];
      return state;
    default:
      return state;
  }
}
