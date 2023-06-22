import HttpService from "@/core/api/httpService";
import { UserData } from "../types";
import SocketClient from "@/core/api/socket";

export async function userLoginOrRegister(
  email: string,
  password: string
): Promise<UserData> {
  try {
    const http = new HttpService();
    const res = await http.post<UserData>(`/users/login-register`, {
      email,
      password,
    });

    const socketClient = SocketClient.getInstance(); 
    socketClient.init();

    return res;
  } catch (error) {
    throw new Error("Login or register fail");
  }
}

export async function getUserProfile(): Promise<UserData> {
  try {
    const http = new HttpService();
    return await http.get<UserData>(`/users/profile`);
  } catch (error) {
    throw new Error("Get user profile fail");
  }
}
