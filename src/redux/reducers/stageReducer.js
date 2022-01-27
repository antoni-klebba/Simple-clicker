import { INC_STAGE } from "../actionTypes";

const incStage = (state = 0, action) => {
  if (action.type === INC_STAGE) return ++state;
  else return state;
};

export default incStage;
