import * as types from "./eventActionsTypes";

export const initialState = {
  events: [],
  processing: false,
  error: null,
};


const event = (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_EVENT_SUCCESS:
      return {
        ...state,
        events: [action.payload, ...state.events]
      };

    case types.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

export default event;
