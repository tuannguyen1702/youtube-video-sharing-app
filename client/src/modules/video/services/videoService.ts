import HttpService from "@/core/api/httpService";
import { VideoData } from "../types";
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
    return await http.post("/videos", { sharedLink });
  } catch (error) {
    throw new Error("Failed to shared link video");
  }
}
