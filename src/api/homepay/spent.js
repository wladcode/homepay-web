import { API_URL } from "../util";
import { executeGet } from "./axiosConfig";

const URL = API_URL + "/v1/spents/";

export const apiLoadSpents = async (year, month) => {
  return executeGet(`${URL}`, `${year}/${month}`);
};
