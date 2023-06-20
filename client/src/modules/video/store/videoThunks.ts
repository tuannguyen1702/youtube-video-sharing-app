import { createAsyncThunk } from "@reduxjs/toolkit";
import { VideoData } from "../types";
import { fetchAllVideo, shareVideo } from "../services/videoService";

export const fetchAllVideoData = createAsyncThunk(
  "video/fetchAllVideoData",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchAllVideo();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const shareVideoData = createAsyncThunk(
  "video/shareVideoData",
  async (sharedLink: string, { rejectWithValue }) => {
    try {
      return await shareVideo(sharedLink);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
