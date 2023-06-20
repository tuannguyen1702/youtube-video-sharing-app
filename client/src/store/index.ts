import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "@/modules/video/store/videoSlice";

export const store = configureStore({
  reducer: {
    video: videoSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
