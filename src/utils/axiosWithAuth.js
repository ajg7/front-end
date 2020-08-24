import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "BASEURL",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};