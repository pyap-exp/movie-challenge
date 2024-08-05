import { instance } from "../api";
import { qsStringify } from "url-assist";
import { templateValue } from "structkit-ts";

const getListOfMovie = async function (name: string, pagin: number) {
  const glbData: any = {};
  glbData["format"] = "json";
  glbData["title"] = name;
  glbData["page"] = pagin;
  const api = await instance.get("/movie?" + qsStringify(glbData));
  return api;
};

export { getListOfMovie };
