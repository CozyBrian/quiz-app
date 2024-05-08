import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  currentQuestion: number;
  selectedOption?: string;
  submitted: boolean;
  showError: boolean;
  totalPoints: number;
};

const initialState: initialStateType = {
  currentQuestion: 0,
  selectedOption: undefined,
  submitted: false,
  showError: false,
  totalPoints: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setSelectedOption(state, action: PayloadAction<string>) {
      if (state.selectedOption === action.payload) {
        state.selectedOption = undefined;
      } else {
        state.selectedOption = action.payload;
      }
    },
    setSubmitted(state, action: PayloadAction<boolean>) {
      state.submitted = action.payload;
    },
    setShowError(state, action: PayloadAction<boolean>) {
      state.showError = action.payload;
    },
    nextQuestion(state) {
      state.currentQuestion++;
      state.selectedOption = undefined;
      state.submitted = false;
      state.showError = false;
    },
    addPoint(state) {
      state.totalPoints += 1;
    },
    resetQuiz(state) {
      state.currentQuestion = 0;
      state.selectedOption = undefined;
      state.submitted = false;
      state.showError = false;
      state.totalPoints = 0;
    }
  },
});

export default quizSlice;
