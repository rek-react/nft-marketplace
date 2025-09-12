import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { CONFIG } from "../config";

// ----------------------------------------------------------------------

const axiosInstance: AxiosInstance = axios.create({
  baseURL: CONFIG.serverUrl,
  withCredentials: true,
});

export interface ErrorResponse {
  message: string;
  statusCode: number;
  error: string;
}

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (!CONFIG.isClient) {
      const { cookies } = await import("next/headers");
      const cookieStore = await cookies();
      const cookiesString = cookieStore
        .getAll()
        .map(({ name, value }) => `${name}=${value}`)
        .join("; ");

      config.headers.set("cookie", cookiesString);
    }

    return config;
  },
);

export { axiosInstance };

// ----------------------------------------------------------------------

export const fetcher = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const res = await axiosInstance(config);
  return res.data;
};
