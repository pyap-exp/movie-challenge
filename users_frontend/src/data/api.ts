import axios from "axios";
import { urlComposer } from "url-assist";

let baseUrl = "http://localhost:8000";
//if (typeof window != undefined) {
//  baseUrl = window.location.origin;
//}
const consUrl = urlComposer(baseUrl);
consUrl.setPort("8000");
console.log(consUrl.getToString(), "::getToString");
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: {},
  withCredentials: false,
});

export { instance };
