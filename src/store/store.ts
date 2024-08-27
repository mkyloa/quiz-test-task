import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quizReducer from '@/features/quizSlice';

const rootReducer = combineReducers({
  quizReducer,
});

export const store = configureStore({
  reducer: rootReducer
});


export type RootState = ReturnType<typeof rootReducer>;

export default store;