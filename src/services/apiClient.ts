import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4d954ccdaa214de880ff3c6d7ca8560d",
  },
});
