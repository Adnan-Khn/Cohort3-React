import { api } from "../../../config/api";

export const getAllProdsApi = async (search) => {
  try {
    let url = search ? `/products/search?q=${search}` : "/products?limit=100";
    let res = await api.get(url);
    //console.log(res.data)
    return res.data;
  } catch (error) {
    console.log("Error in Products Api : ", error);
  }
};
export const getAllCategoriesApi = async () => {
  try {
    let res = await api.get("/products/categories");
    return res.data;
  } catch (err) {
    console.log("Error in Products Api : ", error);
  }
};
export const getProdsByCatApi = async (cat) => {
  //if (cat === null || cat === "") return;
  try {
    let res = await api.get(`/products/category/${cat}`);
    return res.data;
  } catch (err) {
    console.log("Error in Products Api : ", err);
  }
};
