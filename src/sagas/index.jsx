import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import request from 'superagent';

//emulated API call result
// const result = {
//   rates: {
//     AED
//     :
//     3.673097,
//     AFN
//     :
//     69.375,
//     ALL
//     :
//     105.2,
//     AMD
//     :
//     480,
//     ANG
//     :
//     1.783141,
//     AOA
//     :
//     214.584,
//     ARS
//     :
//     20.1755,
//     AUD
//     :
//     1.299545,
//     AWG
//     :
//     1.784998,
//     AZN
//     :
//     1.7025,
//     BAM
//     :
//     1.582704
//   }
// };

function getCurrency(appKey) {
  // console.log('getCurrency Saga', appKey);
  const url = `https://openexchangerates.org/api/latest.json?app_id=${appKey}`;
  return request
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
          })
          .catch(err=>console.log(err));
  // if (appKey === 'qq')
  //   return result;
}

function* callGetCurrency({appKey, resolve, reject}) {
  const result = yield call(getCurrency, appKey);
  // console.log('saggga', appKey, result);
  if (result) {
    yield put({type: "CURRENCIES_FETCHED", payload: result.rates});
    yield call(resolve);
  } else {
    yield call(reject, {appKey: 'Access Erorr. App Key is not valid.'});
  }
}

function* getCurrencySaga() {
  yield* takeEvery("AUTH", callGetCurrency);
}

export default function* rootSaga() {
  yield [
    fork(getCurrencySaga)
  ]
}
