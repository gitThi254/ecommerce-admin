import axios from "./axios";

export const getOrdersReq = () =>
  axios
    .get("/users/order/get-all-orders")
    .then((res) => res.data.data)
    .catch((err) => console.log(err));

export const getOderReq = async (id?: string) => {
  return axios
    .get(`/users/order/${id}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => console.log(err));
};

export const updateOrderStatusReq = async ({
  id,
  status,
}: {
  id: string;
  status: string;
}) => {
  return axios
    .put(`/users/order/update-order/${id}`, { status: status })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => console.log(err));
};
