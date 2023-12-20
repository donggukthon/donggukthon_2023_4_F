import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_SERVER_HOST}`,
  credentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    // 로컬 스토리지에서 토큰 가져오기
    // const token = localStorage.getItem("token");
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb2NpYWxJZCI6IjExMTI4ODk4NzU0ODc4NDkxNjk0NSIsImlhdCI6MTcwMzAyOTQwOSwiZXhwIjoxNzAzMTE1ODA5fQ.LGWDzOhVatSSWAbGvJpdBAc-ByiqlUkhtfzUPhdILy0";

    // 헤더에 토큰 추가
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      // console.log("axsios.jsx: token 존재:" + token);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
