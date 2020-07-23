import { createReducer } from 'reduxsauce';
import { store } from '../../store';
// Action Types
export const Types = {
  CHANGE_STATUS: 'CHANGE_STATUS',
};

// Reducers
export const INITIAL_STATE = { status: '' };

export const CHANGE_STATUS = (state = INITIAL_STATE, action) => {
  const status = action.payload;
  return Object.assign({}, state, { status });
};

export const HANDLERS = {
  [Types.CHANGE_STATUS]: CHANGE_STATUS,
};

export const statusReducer = createReducer(INITIAL_STATE, HANDLERS);

// Action Creators
export const changeStatus = (userName) => {
  return {
    type: 'CHANGE_STATUS',
    payload: `${userName} is typing`,
  };
};
