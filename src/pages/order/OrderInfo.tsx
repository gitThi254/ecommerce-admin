import React from "react";
import { useParams } from "react-router-dom";
import { useOder } from "../../hooks/useOrder";

const OrderInfo = () => {
  const { id } = useParams();
  const { data: order, isPending, error } = useOder(id);
  if (isPending) <div>Loading...</div>;
  if (error) <div>{error.message}</div>;
  return (
    <div>
      <div>
        {order?.orderItems?.map((item: any) => (
          <div key={item._id} className='flex gap-6'>
            <div>{item.product.title}</div>
            <div>{item.product.brand?.title}</div>
            <div>{item.color?.title}</div>
            <div>{item.product?.price}</div>
            <div>{item.quantity}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderInfo;
