import { INC_CASH, DEC_CASH } from "../actionTypes";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INC_CASH:
      return state + action.payload.amount;
    case DEC_CASH:
      return state - action.payload.amount;
    default:
      return state;
  }
};

export default counterReducer;
