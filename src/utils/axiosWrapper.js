import axios from "axios";

export const axiosWrapper = (url, payload, method) => {
  if (!url || !payload) {
    return alert("url and payload is required");
  }
  if (method === "get") {
    return axios.get(url);
  }
  return axios.post(url, payload);
};
