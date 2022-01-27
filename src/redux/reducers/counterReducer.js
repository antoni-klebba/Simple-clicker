import { INC_COUNTER } from "../actionTypes";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INC_COUNTER:
      return state + action.payload.amount;
    default:
      return state;
  }
};

export default counterReducer;
