import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import request from 'superagent';

function getCurrency(appKey) {
  const url = `https://openexchangerates.org/api/latest.json?app_id=${appKey}`;
  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
}

function* callGetCurrency({appKey, resolve, reject}) {
  const result = yield call(getCurrency, appKey);
  console.log(result);
  if (result) {
    yield put({type: "CURRENCIES_FETCHED", payload: result.rates});
    yield call(resolve);
  } else {
    yield call(reject, {appKey: 'Access Erorr. App Key is not valid.'});
  }
}

function* getCurrencySaga() {
  yield* takeEvery("FETCH_CURRENCIES", callGetCurrency);
}

export default function* rootSaga() {
  yield [
    fork(getCurrencySaga)
  ]
}
