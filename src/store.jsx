import { applyMiddleware, createStore } from 'redux';
import createSagaMiddlewear from 'redux-saga';
// import createLogger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddlewear();

const store = createStore(
  reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
