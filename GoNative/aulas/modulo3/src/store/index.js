import { createStore } from 'redux';

// Reducer
const INITIAL_STATE = [
  { id: 1, text: 'Fazer café', completed: false },
  { id: 2, text: 'Estudar React Native', completed: true },
  { id: 3, text: 'Estudar Redux', completed: false },
];
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text, completed: false }];
    case 'MARK_AS_COMPLETED':
      return state.map(todo => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
}

// Actions
// { type: 'ADD_TODO', text: 'Novo Todo' }
// { type: 'MARK_AS_COMPLETED', id: 3 }

// Adicionar um Todo
// Marcar todo como completo

const store = createStore(reducer);

export default store;
