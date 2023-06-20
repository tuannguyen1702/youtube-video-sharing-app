import { createSlice } from "@reduxjs/toolkit";
import { VideoData } from "../types";
import { fetchAllVideoData, shareVideoData} from "./videoThunks";

interface VideoState {
  videos: VideoData[];
  loading: boolean;
  error: any;
  sharedLinkStatus: '' | 'start' | 'success' | 'fail';
}

const initialState: VideoState = {
  videos: [],
  loading: false,
  error: null,
  sharedLinkStatus: ''
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
      })
      .addCase(shareVideoData.pending, (state) => {
        state.sharedLinkStatus = 'start';
      })
      .addCase(shareVideoData.fulfilled, (state, action) => {
        state.sharedLinkStatus = 'success';
      })
      .addCase(shareVideoData.rejected, (state, action) => {
        state.loading = false;
        state.sharedLinkStatus = 'fail';
      });
  },
});

export default videoSlice.reducer;
