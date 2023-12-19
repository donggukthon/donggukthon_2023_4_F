import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_SERVER_HOST}`,
  credentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
