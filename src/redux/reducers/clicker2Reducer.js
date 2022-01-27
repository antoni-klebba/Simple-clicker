import { INC_CLICKER2 } from "../actionTypes";

const clicker2Reducer = (state = 0, action) => {
  switch (action.type) {
    case INC_CLICKER2:
      return state + action.payload.amount;
    default:
      return state;
  }
};

export default clicker2Reducer;
