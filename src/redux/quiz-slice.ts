import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  currentQuestion: number;
  selectedOption?: number;
};

const initialState: initialStateType = {
  currentQuestion: 0,
  selectedOption: undefined,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setSelectedOption(state, action: PayloadAction<number>) {
      state.selectedOption = action.payload;
    },
    resetQuiz(state) {
      state.currentQuestion = 0;
      state.selectedOption = undefined;
    }
  },
});

export default quizSlice;
