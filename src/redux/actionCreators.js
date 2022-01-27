import * as actions from "./actionTypes";

export const incCounter = (amount) => ({
  type: actions.INC_COUNTER,
  payload: {
    amount,
  },
});

export const incCash = (amount) => ({
  type: actions.INC_CASH,
  payload: {
    amount,
  },
});

export const decCash = (amount) => ({
  type: actions.DEC_CASH,
  payload: {
    amount,
  },
});

export const incClicker1 = (amount) => ({
  type: actions.INC_CLICKER1,
  payload: {
    amount,
  },
});

export const incClicker2 = (amount) => ({
  type: actions.INC_CLICKER2,
  payload: {
    amount,
  },
});

export const incClicker3 = (amount) => ({
  type: actions.INC_CLICKER3,
  payload: {
    amount,
  },
});

export const incClicker4 = (amount) => ({
  type: actions.INC_CLICKER4,
  payload: {
    amount,
  },
});

export const incClicker5 = (amount) => ({
  type: actions.INC_CLICKER5,
  payload: {
    amount,
  },
});

export const changeMultiplier = (multiplierState) => {
  const options = [1, 10, 100, "max"];
  return {
    type: actions.CHANGE_MULTIPLIER,
    payload: {
      multiplier: options[multiplierState % 4],
    },
  };
};

export const incMultiplierState = () => ({
  type: actions.INC_MULTIPLIER_STATE,
});

export const changeText = (text) => ({
  type: actions.CHANGE_TEXT,
  payload: {
    text,
  },
});

export const incStage = () => ({
  type: actions.INC_STAGE,
});

export const incPrevStage = () => ({
  type: actions.INC_PREV_STAGE,
});

export const activateEnd = () => ({
  type: actions.ACTIVATE_END,
});

export const decEndTimer = () => ({
  type: actions.DEC_END_TIMER,
});
