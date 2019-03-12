import { createStore, compose } from 'redux';

import reducer from './reducers/login';

export default (__DEV__
  ? createStore(reducer, compose(console.tron.createEnhancer()))
  : createStore(reducer));
