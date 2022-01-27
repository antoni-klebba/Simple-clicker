import { INC_MULTIPLIER_STATE } from "../actionTypes";

const multiplierStateReducer = (state = 1, action) => {
  switch (action.type) {
    case INC_MULTIPLIER_STATE:
      return ++state;
    default:
      return state;
  }
};

export default multiplierStateReducer;
