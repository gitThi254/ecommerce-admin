import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  getOderReq,
  getOrdersReq,
  updateOrderStatusReq,
} from "../api/order.api";
import { toast } from "react-toastify";

export const useOders = () =>
  useQuery({
    queryKey: ["orders"],
    queryFn: getOrdersReq,
  });

export const useOder = (id?: string) =>
  useQuery({
    queryKey: ["orders", id],
    queryFn: () => getOderReq(id),
  });

export const useUpdateStatusOrder = () => {
  return useMutation({
    mutationFn: updateOrderStatusReq,
    onSuccess: (data) => {
      toast.success("update status successfully");
    },
  });
};
