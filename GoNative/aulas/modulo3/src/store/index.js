import { createStore, compose } from 'redux';

import todos from './reducers/todos';

export default (__DEV__
  ? createStore(todos, compose(console.tron.createEnhancer()))
  : createStore(todos));
