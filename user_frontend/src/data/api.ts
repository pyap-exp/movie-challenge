import axios from "axios";

let baseUrl = "http://159.65.2.197:8000";
//if (typeof window != undefined) {
//  baseUrl = window.location.origin;
//}
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: {},
  withCredentials: false,
});

export { instance };
