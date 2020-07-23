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
export const changeStatus = (text) => {
  return (dispatch) => {
    setTimeout(
      () =>
        dispatch({
          type: Types.CHANGE_STATUS,
          payload: `${text} is typing...`,
        }),
      1000
    );
  };
};
