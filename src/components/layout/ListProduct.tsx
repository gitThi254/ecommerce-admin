import { useProducts } from "../../hooks/useProduct";
import { Link } from "react-router-dom";
import DelProduct from "../Btn/DelProduct";

const ListProduct = () => {
  const { data: products, isLoading, error } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      {products?.map((product) => (
        <div key={product._id} className='grid grid-cols-7'>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.quantity}</div>
          <div>{product.category?.title ?? "empty category"}</div>
          <div>{product.brand?.title ?? "empty brand"}</div>

          <div>
            {product.color?.map((color: any) => (
              <div key={color._id}>{color?.title}</div>
            ))}
          </div>
          <div className='flex gap-10 items-center'>
            <Link to={`/product-list/${product._id}`}>Edit</Link>
            <DelProduct id={product._id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
