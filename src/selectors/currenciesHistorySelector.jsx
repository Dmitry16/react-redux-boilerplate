// import React from 'react';
import { createSelector } from 'reselect';

const currencies = (store, props) => {
  const defaultCurrencies = {
    'BTC': 0.000127759842,
    'EUR': 0.859194,
    'RUB': 62.905833,
    'UAH': 26.777,
    'XAG': 0.06466231,
    'XAU': 0.00081753,
    'XPT': 0.00120556,
  }
  // return Object.entries(store.currency.currencies).filter(cur =>
  //   defaultCurrencies.includes(cur[0])).reduce((acc, cur, i) => {
  //     acc[cur[0]] = cur[1];
  //     return acc;
  //   }, {});
  // const zz = store.currency.currencies;
  // console.log('selectorrrrrr', props);
  return defaultCurrencies;
};

const history2017 = store => store.currency.history2017;
const history2016 = store => store.currency.history2016;
const history2015 = store => store.currency.history2015;
const history2014 = store => store.currency.history2014;
const history2013 = store => store.currency.history2013;

const currenciesHistory = (
  filteredCurrencies,
  hist2017,
  hist2016,
  hist2015,
  hist2014,
  hist2013
) => {
  const arr = [];
  arr.push(filteredCurrencies);
  arr.push(hist2017);
  arr.push(hist2016);
  arr.push(hist2015);
  arr.push(hist2014);
  arr.push(hist2013);
  return arr;
};

export default createSelector(
  currencies,
  history2017,
  history2016,
  history2015,
  history2014,
  history2013,
  currenciesHistory
);
