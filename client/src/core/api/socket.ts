import LocalStorageService from "@/shared/services/localStorage";
import { io, Socket } from "socket.io-client";

class SocketClient {
  private static instance: SocketClient;
  private socket: Socket | null = null;

  private constructor() {}

  public static getInstance(): SocketClient {
    if (!SocketClient.instance) {
      SocketClient.instance = new SocketClient();
    }
    return SocketClient.instance;
  }

  public init() {
    const localStorageService = new LocalStorageService();
    const token = localStorageService.getToken();

    let opt = {};
    if (token) {
      opt = {
        transportOptions: {
          polling: {
            extraHeaders: {
              Authorization: `Bearer ${token}`
            },
          },
        },
      };
    }

    this.socket = io("http://localhost:3001/", opt);
  }

  public getSocket(): Socket | null {
    return this.socket;
  }
}

export default SocketClient;