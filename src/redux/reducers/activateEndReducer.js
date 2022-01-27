import { ACTIVATE_END } from "../actionTypes";

const activateEnd = (state = false, action) => {
  if (action.type === ACTIVATE_END) return true;
  else return state;
};

export default activateEnd;
