import React, { useEffect, useState } from "react";
import { useUpdateStatusOrder } from "../../hooks/useOrder";

const orderStatusOption = [
  "Ordered",
  "Processing",
  "Confirmed",
  "Delivered to carrier",
  "In delivery",
  "Delivered",
  "Canceled",
  "Delivery failed",
];

const UpdateOrderStatusForm = ({ order }: { order: any }) => {
  const [orderStatus, setOrderStatus] = useState(order?.orderStatus);
  const { mutate: orderStatusMutation, isPending } = useUpdateStatusOrder();
  useEffect(() => {
    if (orderStatus !== order?.orderStatus) {
      orderStatusMutation({ id: order._id, status: orderStatus });
    }
  }, [orderStatus]);
  return (
    <select
      defaultValue={order?.orderStatus}
      onChange={(e: any) => setOrderStatus(e.target.value)}
    >
      {orderStatusOption?.map((item: any, i: number) =>
        i == 0 ? (
          <option value={item} key={item} selected>
            {item}
          </option>
        ) : (
          <option value={item} key={item}>
            {item}
          </option>
        )
      )}
    </select>
  );
};

export default UpdateOrderStatusForm;
