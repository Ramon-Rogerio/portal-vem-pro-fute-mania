import axios from "axios";
import { erroInterceptor, responseInterceptor } from "./interceptors";

const Api = axios.create({
  baseURL: "http://localhost:8000/api",
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => erroInterceptor(error)
);

export { Api };
