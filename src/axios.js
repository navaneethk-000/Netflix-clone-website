import axios from "axios";
import { baseURL } from "./constants/constants";
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
  });

  export default axios