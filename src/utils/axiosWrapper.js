import axios from "axios";

export const axiosWrapper = (
  url,
  payload,
  method,
  headers = { "Content-Type": "application/json" }
) => {
  if (!url || !payload) {
    return alert("url and payload is required");
  }
  if (method === "get") {
    return axios.get(url);
  } else if (method === "patch") {
    return axios.patch(url, payload);
  }

  return axios.post(url, payload, headers);
};
