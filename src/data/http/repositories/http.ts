import { AxiosResponse } from "axios";

export interface Http {
  // 'T' is going to be a type declared at run-time instead of compile time.
  post<T>(url: string, data: T): Promise<AxiosResponse>;
  get<T>(url: string, params?: T): Promise<AxiosResponse>;
  deleteRequest<T>(url: string, params?: T): Promise<AxiosResponse>;
  setBaseConfig(baseUrl: string): void;
}
