import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app-slice";
import quizSlice from "./quiz-slice";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const action = {
  app: appSlice.actions,
  quiz: quizSlice.actions,
};

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    quiz: quizSlice.reducer,
  },
});

export default store;
