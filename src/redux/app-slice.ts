import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  selectedQuiz?: number;
  isDarkMode: boolean;
}

const initialState: initialStateType = {
  isDarkMode: false
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedQuiz(state, action: PayloadAction<number>) {
      state.selectedQuiz = action.payload;
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload;
    }
  },
});

export default appSlice;
