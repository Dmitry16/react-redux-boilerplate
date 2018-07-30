import { takeEvery } from 'redux-saga';
import { fork, call, put, all } from 'redux-saga/effects';
import request from 'superagent';


function getCurrency(appKey) {
  // console.log('getCurrency Saga', appKey);
  const url = `https://openexchangerates.org/api/latest.json?app_id=${appKey}`;
  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}


function* callGetCurrency({appKey, resolve, reject}) {
  const currencies2018 = yield call(getCurrency, appKey);
  // console.log('saggga', appKey, result);
  if (currencies2018) {
    yield put({type: "CURRENCIES_FETCHED", payload: currencies2018.rates});
    yield call(resolve);
  } else {
    yield call(reject, {appKey: 'Access Erorr. App Key is not valid.'});
  }
}

function getHistory(appKey, year = 2017) {
  // console.log('getHistory:::', appKey, year);
  const url = `https://openexchangerates.org/api/historical/${year}-02-16.json?app_id=${appKey}
  &show_alternative=1
  &symbols=BTC,UAH,RUB,EUR,XAU,XAG,XPT,XPD
  &prettyprint=0`;

  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}

function* callGetHistory({appKey, resolve, reject}) {
  const years = [2017, 2016, 2015, 2014, 2013];
  const history = yield all(years.map(year => {
    // console.log('callGetHistory', year);
    return call(getHistory, appKey, year)
  }));
  console.log('saggga', history);
  if (history) {
    yield put({type: "HISTORY_FETCHED", payload: history});
  }
}

function* getCurrencySaga() {
  yield* takeEvery("AUTH", callGetCurrency);
}

function* getHistorySaga() {
  yield* takeEvery("AUTH", callGetHistory);
}

export default function* rootSaga() {
  yield all([
    fork(getCurrencySaga),
    fork(getHistorySaga)
  ])
}
