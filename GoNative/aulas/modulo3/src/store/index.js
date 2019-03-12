import { createStore } from 'redux';

// Reducer
const INITIAL_STATE = ['Fazer café', 'Estudar React Native', 'Estudar Redux'];
function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_TODO') {
    return [...state, action.text];
  }

  return state;
}

// Actions
// { type: 'ADD_TODO', text: 'Novo Todo' }
// { type: 'MARK_AS_COMPLETED', id: 3 }

// Adicionar um Todo
// Marcar todo como completo

const store = createStore(reducer);

export default store;
