import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfile, userLoginOrRegister } from "../services/userService";
import { LoginRegisterFormData } from "@/modules/video/types";
import LocalStorageService from "@/shared/services/localStorage";
import { userLogout } from "./userSlice";
import SocketClient from "@/core/api/socket";
const localStorage = new LocalStorageService();

export const loginOrRegister = createAsyncThunk(
  "user/loginOrRegister",
  async (payload: LoginRegisterFormData, { rejectWithValue }) => {
    try {
      const { email, password } = payload;
      const user = await userLoginOrRegister(email, password);
      localStorage.setToken(user.token);

      const socketClient = SocketClient.getInstance();
      const socket = socketClient.getSocket();
      if (socket) socket.removeAllListeners();
      socketClient.init();

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
