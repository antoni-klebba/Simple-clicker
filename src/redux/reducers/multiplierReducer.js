import { CHANGE_MULTIPLIER } from "../actionTypes";
import { useSelector } from "react-redux";

const multiplierReducer = (state = 1, action) => {
  switch (action.type) {
    case CHANGE_MULTIPLIER:
      return action.payload.multiplier;
    default:
      return state;
  }
};

export default multiplierReducer;
