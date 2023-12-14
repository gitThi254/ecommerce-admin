import axios from "./axios";
export const getProducts = async (): Promise<Product[]> =>
  await axios.get("/products").then((res) => {
    return res.data.data;
  });

export const createProduct = async (data: Product): Promise<Product> => {
  console.log(data);
  return await axios.post("/products", data).then((res) => {
    console.log(res.data);
    return res.data.data;
  });
};

export const getProductReq = (id?: string): Promise<Product> =>
  axios.get(`/products/${id}`).then((res) => res.data.data);

export const deleteProductReq = async (id?: string): Promise<Product> => {
  console.log(id);
  return await axios
    .delete(`/products/${id}`)
    .then((res) => res.data.data)
    .catch((err) => console.log(err));
};

export const updateProductReq = ({
  id,
  data,
}: {
  id?: string;
  data?: Product;
}): Promise<Product> =>
  axios.put(`/products/${id}`, data).then((res) => res.data.data);
