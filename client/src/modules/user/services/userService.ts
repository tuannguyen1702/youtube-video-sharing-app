import HttpService from "@/core/api/httpService";
import { UserData } from "../types";

const http = new HttpService();

export async function userLoginOrRegister(
  email: string,
  password: string
): Promise<UserData> {
  try {
    return await http.post<UserData>(`/users/login-register`, {
      email,
      password,
    });
  } catch (error) {
    throw new Error("Login or register fail");
  }
}


export async function getUserProfile(): Promise<UserData> {
  try {
    return await http.get<UserData>(`/users/profile`);
  } catch (error) {
    throw new Error("Get user profile fail");
  }
}
