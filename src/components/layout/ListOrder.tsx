import React from "react";
import { useOders } from "../../hooks/useOrder";
import { Link } from "react-router-dom";
import UpdateOrderStatusForm from "../Form/UpdateOrderStatusForm";

const ListOrder = () => {
  const { data: orders, isPending, error } = useOders();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div className='w-full  grid grid-cols-4 place-items-center'>
      {orders?.map((order: any, i: number) => (
        <div key={orders?._id ?? i} className=''>
          <div>
            {" "}
            {order?.shippingInfo?.firstname +
              " " +
              order?.shippingInfo?.lastname}{" "}
          </div>
          <div>{order?.user?.email}</div>
          <div>{order?.user?.mobile}</div>
          <div>
            <Link to={`/order-list/${order._id}`}>View Order</Link>
          </div>
          <div>{order?.totalPrice}</div>
          <div>{new Date(order?.createdAt).toLocaleString()}</div>
          <div>
            <UpdateOrderStatusForm order={order} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOrder;
