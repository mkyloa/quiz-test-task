import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
  answers: { [key: string]: string };
}

const initialState: QuizState = {
  answers: {},
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ slug: string; answer: string }>) => {
      state.answers[action.payload.slug] = action.payload.answer;
    },
  },
});

export const { setAnswer } = quizSlice.actions;
export default quizSlice.reducer;