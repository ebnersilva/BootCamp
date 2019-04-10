import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { statement } from '@babel/template';

/**
 * Types e Actions Creators
 */

const { Types, Creators } = createActions({
  setPodcastRequest: ['dataPassed'],
});

export const PlayerTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  // data: [],
});

/* Reducers */

// export cont reducer = state =>
//   statement.merge({ data: [] });

/* Reducers to types */
