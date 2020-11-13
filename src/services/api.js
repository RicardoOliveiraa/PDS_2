import axios from "axios";

const api = axios.create({
  baseURL: 'https://disney-flix.herokuapp.com/'
});

export default api;
