function currencyReducer(state = {}, action) {
  switch(action.type) {
    case 'CURRENCIES_FETCHED':
      return {
        ...state,
        currencies: action.payload,
        loggedIn: true
      }
    default:
      return state;
  }
}

export default currencyReducer;
