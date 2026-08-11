export type RequestConfig = {
  headers?: Record<string, string>;
};

export const api = {
  baseURL: 'mock://api',
  async get(url: string) {
    return { data: { url } };
  },
  async post(url: string, body?: unknown) {
    return { data: { url, body } };
  }
};
