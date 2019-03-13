import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const createAppropriateStore = __DEV__ ? console.tron.createEnhancer : createStore;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    createAppropriateStore(),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
