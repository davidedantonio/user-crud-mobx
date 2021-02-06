import axios from "axios";

const userClient = axios.create({
  baseURL: 'http://localhost:8001'
});

export {
  userClient
}