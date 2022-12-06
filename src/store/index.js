import {configureStore} from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import assistantReducer from "./assistantSlice"

const store = configureStore({
  reducer: {
    game: gameReducer,
    assistant: assistantReducer
  }
})

export default store;