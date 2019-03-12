import { createStore } from 'redux';

// Reducer
function reducer() {
  return ['Fazer café', 'Estudar React Native', 'Estudar Redux'];
}

const store = createStore(reducer);

export default store;
