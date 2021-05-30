import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-b5164-default-rtdb.firebaseio.com/",
});

export default instance;
