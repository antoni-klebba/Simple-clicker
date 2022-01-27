import { INC_CLICKER3 } from "../actionTypes";

const clicker3Reducer = (state = 0, action) => {
  switch (action.type) {
    case INC_CLICKER3:
      return state + action.payload.amount;
    default:
      return state;
  }
};

export default clicker3Reducer;
