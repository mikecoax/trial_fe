import * as types from "./eventActionsTypes";

export const newEventAction = data => {
  return { type: types.NEW_EVENT, payload: data };
};

export const clearErrorAction = () => {
  return { type: types.CLEAR_ERROR }
};
