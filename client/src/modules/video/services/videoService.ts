import HttpService from "@/core/api/httpService";
import { VideoData } from "../types";
import socket from "@/core/api/socket";
import LocalStorageService from "@/shared/services/localStorage";
import SocketClient from "@/core/api/socket";
const localStorageService = new LocalStorageService();

export async function fetchAllVideo(): Promise<VideoData[]> {
  try {
    const http = new HttpService();
    return await http.get<VideoData[]>(`/videos`);
  } catch (error) {
    throw new Error("Failed to fetch video data");
  }
}

export async function shareVideo(sharedLink: string): Promise<VideoData> {
  try {
    const http = new HttpService();
    const video: VideoData = await http.post("/videos", { sharedLink });

    const token = localStorageService.getToken();
    const socketClient = SocketClient.getInstance();
    const socket = socketClient.getSocket();
    if (socket) {
      socket.emit("notify-new-video", JSON.stringify(video));
    }

    return video;
  } catch (error) {
    throw new Error("Failed to shared link video");
  }
}
