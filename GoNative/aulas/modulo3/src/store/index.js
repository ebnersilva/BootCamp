import { createStore, compose } from 'redux';

import reducer from './reducers';

const store = __DEV__
  ? createStore(reducer, compose(console.tron.createEnhancer()))
  : createStore(reducer);

console.tron.log(store.getState());

export default store;
