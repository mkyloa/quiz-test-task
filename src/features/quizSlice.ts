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
    setAnswers: (state, action: PayloadAction<{ [key: string]: string }>) => {
      state.answers = action.payload;
    }
  },
});

export const { setAnswer, setAnswers } = quizSlice.actions;
export default quizSlice.reducer;