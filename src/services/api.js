import axios from "./intance";

export const getVisitor = () => {
  return axios.post("/visitor").then((res) => res.data);
};

export const getProducts = (category, page) => {
  return axios.get(`/productos/${category}/${page}`).then((res) => res.data);
};
