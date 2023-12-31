import { createSlice } from "@reduxjs/toolkit";

export type NotifyData = {
  title?: string;
  message?: string;
  type?: "success" | "danger" | "warning";
};

interface NotifyState {
  notifies: NotifyData[];
  loading: boolean;
  error: any;
}

const initialState: NotifyState = {
  notifies: [],
  loading: false,
  error: null,
};

const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    addNotifyToList: (state, action) => {
      state.notifies = action.payload ? [action.payload] : [];
    },
  },
});

export const { addNotifyToList } = notifySlice.actions;

export default notifySlice.reducer;
