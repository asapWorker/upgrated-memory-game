import {createSlice} from "@reduxjs/toolkit";

const assistantSlice = createSlice({
  name: 'assistant',
  initialState: {
    clientAssistant: null,
    data: {
      type: 'init',
      payload: null
    }
  },
  reducers: {
    changeAssistantData(state, action) {
      state.data = action.payload;
    }
  }
})

export default assistantSlice.reducer;
export const {changeAssistantData} = assistantSlice.actions;