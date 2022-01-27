import { combineReducers } from "redux";

import counter from "./reducers/counterReducer";
import cash from "./reducers/cashReducer";
import clicker1 from "./reducers/clicker1Reducer";
import clicker2 from "./reducers/clicker2Reducer";
import clicker3 from "./reducers/clicker3Reducer";
import clicker4 from "./reducers/clicker4Reducer";
import clicker5 from "./reducers/clicker5Reducer";
import multiplier from "./reducers/multiplierReducer";
import multiplierState from "./reducers/multiplierStateReducer";
import text from "./reducers/textReducer";
import stage from "./reducers/stageReducer";
import prevStage from "./reducers/prevStageReducer";
import isEndActive from "./reducers/activateEndReducer";
import endTimer from "./reducers/endTimerReducer";

const allReducers = combineReducers({
  counter,
  cash,
  clicker1,
  clicker2,
  clicker3,
  clicker4,
  clicker5,
  multiplier,
  multiplierState,
  text,
  stage,
  prevStage,
  isEndActive,
  endTimer,
});
export default allReducers;
