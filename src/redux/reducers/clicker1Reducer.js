import { INC_CLICKER1 } from "../actionTypes";

const clicker1Reducer = (state = 0, action) => {
  switch (action.type) {
    case INC_CLICKER1:
      return state + action.payload.amount;
    default:
      return state;
  }
};

export default clicker1Reducer;
