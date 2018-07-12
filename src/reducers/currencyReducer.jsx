const initialState = {

  selectedCurrencies: [],

  currencies: {
  AED
  :
  3.673097,
  AFN
  :
  69.375,
  ALL
  :
  105.2,
  AMD
  :
  480,
  ANG
  :
  1.783141,
  AOA
  :
  214.584,
  ARS
  :
  20.1755,
  AUD
  :
  1.299545,
  AWG
  :
  1.784998,
  AZN
  :
  1.7025,
  BAM
  :
  1.582704
  }
}

// export function currencyReducer(state = initialState, action) {
//   switch(action.type) {
//     case 'CURRENCIES_FETCHED':
//       return {
//         ...state,
//         currencies: action.payload,
//         loggedIn: true
//       }
//     default:
//       return state;
//   }
// }

export function currenciesReducer(state = initialState, action) {
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
        selectedCurrencies:
        [
          ...state.selectedCurrencies,
          [action.cur, action.val]
        ]
      }
    case 'CURRENCY_REMOVED':
      return {
        ...state,
        selectedCurrencies:
        [
          ...state.selectedCurrencies,
          [action.cur, action.val]
        ]
      }
    default:
      return state;
  }
}
