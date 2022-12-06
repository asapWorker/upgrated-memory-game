import {createSlice} from "@reduxjs/toolkit";
import {
  LOADING,
  PAUSE,
  COUNTDOWN,
  ACTIVITY,
  FINISH,
  CORRECT,
  READY,
  LOADED,
  COUNTDOWN_END,
  PAUSE_END
} from "../constants";

const gameSlice = createSlice({
  name: "game",

  initialState: {
    level: null,
    gameId: null,
    step: LOADING,

    prevStep: undefined
  },

  reducers: {
    startGame(state, action) {
      state.level = action.payload;
      state.gameId = Date.now();
      state.step = LOADING;

      state.prevStep = undefined;
    },

    restartGame(state) {
      state.gameId = Date.now();
      state.step = LOADING;

      state.prevStep = undefined;
    },

    finishLoading(state) {
      state.step = LOADED;
    },

    makePause(state) {
      state.prevStep = state.step;
      state.step = PAUSE;
    },

    finishPause(state) {
      state.step = PAUSE_END;
    },

    makeCountdown(state) {
      state.prevStep = state.step;
      state.step = COUNTDOWN;
    },

    finishCountdown(state) {
      state.step = COUNTDOWN_END;
    },

    startActivity(state) {
      state.prevStep = state.step;
      state.step = ACTIVITY;
    },

    setReady(state) {
      state.step = READY;
    },

    finishGame(state) {
      state.step = FINISH;
    },

    setInitResult(state, action) {
      state.result = action.payload;
    },

    changeResult(state, action) {
      if (action.payload === CORRECT) {
        state.result += 1;
      } else {
        state.result -= 1;
      }
    },
  }
})

export default gameSlice.reducer;
export const {startGame, restartGame, finishLoading, makePause, finishPause, makeCountdown,finishCountdown, startActivity, setReady, finishGame, setInitResult, changeResult} = gameSlice.actions;