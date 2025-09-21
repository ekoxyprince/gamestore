import axios from "axios";

const req = axios.create({
  baseURL: "http://192.168.1.117:3000",
});

export function get(uri: string, token?: string) {
  return req
    .get(uri, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.response?.data?.error?.message || err.message);
    });
}
export function post(uri: string, data: Record<string, any>, token?: string) {
  return req
    .post(uri, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.response?.data?.error?.message || err.message);
    });
}
export function patch(uri: string, data: Record<string, any>, token?: string) {
  return req
    .patch(uri, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err.response?.data?.error?.message || err.message);
    });
}
