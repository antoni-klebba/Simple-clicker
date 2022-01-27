import { INC_PREV_STAGE } from "../actionTypes";

const incPrevStage = (state = 0, action) => {
  if (action.type === INC_PREV_STAGE) return ++state;
  else return state;
};

export default incPrevStage;
