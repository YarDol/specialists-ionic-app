import { configureStore } from "@reduxjs/toolkit";
import { specialistsReducer } from "./slices/specialists.slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    specialists: specialistsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
