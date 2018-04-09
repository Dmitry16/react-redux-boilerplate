function currencyReducer(state = {}, action) {
  switch(action.type) {
    case 'CURRENCIES_FETCHED':
      return {
        ...state,
        currencies: action.payload,
        loggedIn: true
      }
    case 'CURRENCY_ADDED':
      return {
        ...state,
        currency: action.cur,
        value: action.val
      }
    case 'CURRENCY_REMOVED':
      return {
        ...state,
        currency: action.cur,
        value: action.val
      }
    default:
      return state;
  }
}

export default currencyReducer;
