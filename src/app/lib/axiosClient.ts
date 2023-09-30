import baseAxios from "axios";

const axios = baseAxios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_ENDPOINT + "/api",
  withCredentials: true,
  timeout: 1000 * 60,
});

export default axios;
