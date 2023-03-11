import axios, { AxiosResponse } from "axios";
import { Http } from "../repositories/http";

export function httpService(): Http {
  return {
    setBaseConfig(baseUrl: string) {
      axios.defaults.baseURL = `${baseUrl}`;
    },
    post<T>(url: string, data: T): Promise<AxiosResponse> {
      return axios.post(url, data);
    },
    get<T>(url: string, params?: T): Promise<AxiosResponse> {
      return axios.get(url, { params });
    },
    deleteRequest<T>(url: string, params?: T): Promise<AxiosResponse> {
      return axios.delete(url, { params });
    },
  };
}
