import { createSlice } from "@reduxjs/toolkit";
import { VideoData } from "../types";
import { fetchAllVideoData } from "./videoThunks";

interface VideoState {
  videos: VideoData[];
  loading: boolean;
  error: any;
}

const initialState: VideoState = {
  videos: [],
  loading: false,
  error: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllVideoData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllVideoData.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchAllVideoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default videoSlice.reducer;
