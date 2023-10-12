import axios from "axios";

const axiosPrivate: any = axios.create({
  baseURL: "http://localhost:5000",
});

axiosPrivate.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

export default axiosPrivate;
