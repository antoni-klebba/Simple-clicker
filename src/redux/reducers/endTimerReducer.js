import { DEC_END_TIMER } from "../actionTypes";

const endTimer = (state = 60, action) => {
  if (action.type === DEC_END_TIMER) return state - 1;
  else return state;
};

export default endTimer;
