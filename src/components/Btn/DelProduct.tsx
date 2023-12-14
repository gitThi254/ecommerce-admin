import { useDelProduct } from "../../hooks/useProduct";

const DelProduct = ({ id }: { id?: string }) => {
  const { mutate: deleteProductMutation, isPending } = useDelProduct();

  return (
    <button onClick={() => deleteProductMutation(id)} disabled={isPending}>
      {isPending ? "Loading..." : "Delete"}
    </button>
  );
};

export default DelProduct;
