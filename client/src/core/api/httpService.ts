import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

class HttpService {
  private httpClient: AxiosInstance;

  token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR1YW5uZ3V5ZW4xNzAzQGdtYWlsLmNvbSIsImlhdCI6MTY4NzI1MTQxNiwiZXhwIjoxNjg3MjU1MDE2fQ.72JlzEx82z-T7sSxa2CGyY6iL8kudFfDYYQ8XVJChMU`;

  constructor(baseURL: string = "") {
    this.httpClient = axios.create({
      baseURL: baseURL || "http://localhost:3001/",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    // Request interceptor
    this.httpClient.interceptors.request.use(async (request) => {
      return request;
    });

    // Response interceptor
    this.httpClient.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const axiosError: AxiosError = error;
        const errorResponse = axiosError.response?.data;
        throw errorResponse || error;
      }
    );
  }

  setAuthToken(token: string): void {
    this.httpClient.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  }

  clearAuthToken(): void {
    delete this.httpClient.defaults.headers.common["Authorization"];
  }

  async get<T>(url: string, config: any = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.httpClient.get(url, config);
    return response.data;
  }

  async post<T>(url: string, data: any = {}, config: any = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.httpClient.post(
      url,
      data,
      config
    );
    return response.data;
  }

  async put<T>(url: string, data: any = {}, config: any = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.httpClient.put(
      url,
      data,
      config
    );
    return response.data;
  }

  async patch<T>(url: string, data: any = {}, config: any = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.httpClient.patch(
      url,
      data,
      config
    );
    return response.data;
  }

  async delete<T>(url: string, config: any = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.httpClient.delete(
      url,
      config
    );
    return response.data;
  }
}

export default HttpService;
