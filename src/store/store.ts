import { configureStore } from "@reduxjs/toolkit";
import subjectsReducer from "./subjects/subjectsSlice";
import lessonsSlice from './lessons/lesssonsSlice';
import restoreMainChatSlice from './restoreMainChatt/chattingSlice';


 const store = configureStore({
  reducer: {
    subjects: subjectsReducer,
     lessons: lessonsSlice,
    restoreMessages : restoreMainChatSlice,
  },
 });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store