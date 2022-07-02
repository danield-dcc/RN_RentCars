import axios from "axios";

//endereço local da maquina atual
const api = axios.create({
  baseURL: "http://192.168.0.249:3333",
});

export default api;
