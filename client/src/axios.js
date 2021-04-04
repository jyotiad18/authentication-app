import axios from "axios";

const instance = axios.create({
  baseURL: "https://authenticate-dev-app.herokuapp.com/api",
});

export default instance;