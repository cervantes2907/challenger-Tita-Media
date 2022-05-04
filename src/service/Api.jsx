import axios from "axios";

export const Api = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
  headers: { "app-id": "626d44beb3ccd46c6f9e4519" },
});
