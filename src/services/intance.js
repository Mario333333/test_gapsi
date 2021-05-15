import axios from "axios";

const instance = axios.create({
  baseURL: "https://node-red-nxdup.mybluemix.net",
});

export default instance;
