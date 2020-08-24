import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://better--professor.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};