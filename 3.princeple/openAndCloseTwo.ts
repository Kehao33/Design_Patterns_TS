import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use((config) => {
  if (config.url?.startsWith("http")) {
    config.url = "http://localhost:3000" + config.url;
  }
  return config;
});

instance.interceptors.response.use((response) => {
  if (response.status < 300 || response.status > 304) {
    return Promise.reject(response);
  }
  
  return response.data;
});

instance({
  url: `/api/users`,
}).then((result) => {
  console.log(result, "result");
});
