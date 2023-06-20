import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfile, userLoginOrRegister } from "../services/userService";
import { LoginRegisterFormData } from "@/modules/video/types";
import LocalStorageService from "@/shared/services/localStorage";
import { userLogout } from "./userSlice";
const localStorage = new LocalStorageService();

export const loginOrRegister = createAsyncThunk(
  "user/loginOrRegister",
  async (payload: LoginRegisterFormData, { rejectWithValue }) => {
    try {
      const { email, password } = payload;
      const user = await userLoginOrRegister(email, password);
      localStorage.setToken(user.token);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      return await getUserProfile();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { dispatch }) => {
    localStorage.clearToken();
    dispatch(userLogout());
    return true;
  }
);
