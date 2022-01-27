import { INC_CLICKER5 } from "../actionTypes";

const clicker5Reducer = (state = 0, action) => {
  switch (action.type) {
    case INC_CLICKER5:
      return state + action.payload.amount;
    default:
      return state;
  }
};

export default clicker5Reducer;
