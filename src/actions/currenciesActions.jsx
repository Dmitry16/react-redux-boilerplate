export function addCurrency() {
  console.log('CURRENCY_ADDED');
  return {
    type: 'CURRENCY_ADDED'
  }
}
export function removeCurrency(cur) {
  console.log('CURRENCY_REMOVED', cur);
  return {
    type: 'CURRENCY_REMOVED'
  }
}
