import HttpService from "@/core/api/httpService";
import { VideoData } from "../types";

const http = new HttpService();

export async function fetchAllVideo(): Promise<VideoData[]> {
  try {
    return await http.get<VideoData[]>(`/videos`);
  } catch (error) {
    throw new Error("Failed to fetch video data");
  }
}

export async function shareVideo(sharedLink: string): Promise<VideoData> {
  try {
    return await http.post("/videos", { sharedLink });
  } catch (error) {
    throw new Error("Failed to shared link video");
  }
}
