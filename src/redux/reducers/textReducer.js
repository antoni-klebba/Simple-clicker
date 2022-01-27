import { CHANGE_TEXT } from "../actionTypes";

const changeText = (state = "", action) => {
  if (action.type === CHANGE_TEXT) return action.payload.text;
  else return state;
};

export default changeText;
