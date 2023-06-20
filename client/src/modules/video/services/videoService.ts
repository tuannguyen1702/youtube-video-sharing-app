import HttpService from "@/core/api/httpService";
import { VideoData } from "../types";

const http = new HttpService();

export async function fetchAllVideo(): Promise<VideoData[]> {
  try {
    const response = await http.get<VideoData[]>(`/videos`);
    return response as VideoData[];
  } catch (error) {
    throw new Error("Failed to fetch video data");
  }
}

export async function shareVideo(sharedLink: string): Promise<VideoData> {
  try {
    const response = await http.post("/videos", { sharedLink });
    return response as VideoData;
  } catch (error) {
    throw new Error("Failed to shared link video");
  }
}
