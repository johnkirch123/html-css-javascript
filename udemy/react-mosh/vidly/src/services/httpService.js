import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common["x-auth-token"] = auth.getJwt();

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occured.");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
  setJwt
};