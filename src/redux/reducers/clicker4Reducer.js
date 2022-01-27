import { INC_CLICKER4 } from "../actionTypes";

const clicker4Reducer = (state = 0, action) => {
  switch (action.type) {
    case INC_CLICKER4:
      return state + action.payload.amount;
    default:
      return state;
  }
};

export default clicker4Reducer;
