import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5600/api",
});

export default instance;