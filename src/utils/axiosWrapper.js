import axios from "axios";

export const axiosWrapper = (url, payload) => {
  if (!url || !payload) {
    return alert("url and payload is required");
  }
  return axios.post(url, payload);
};
