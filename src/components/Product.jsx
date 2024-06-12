import { Link } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import { deleteProduct } from "../products";

/* eslint-disable react/prop-types */
const Product = ({ product, getProducts }) => {
  const confirmAndDelete = async (id) => {
    const result = confirm("Are you sure you want to delete this product?");
    if (result) {
      try {
        await deleteProduct(id);
        getProducts();
        enqueueSnackbar(`Product #${id} successfully deleted`, {
          variant: "success",
        });
      } catch (error) {
        enqueueSnackbar(error.message, { variant: "error" });
      }
    }
  };

  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img src={product.image} className="w-full h-28 object-cover" />
      <div className="px-4 pt-2 pb-4">
        <h2 className="text font-semibold">{product.name}</h2>
        <div className="text-xs font-grey-300">#{product.id}</div>

        <div className="text-sm">Quantity: {product.quantity}</div>
        <div className="text-sm">Price ${product.price}</div>

        <div className="mt-2 flex gap-4">
          <Link
            to={`/edit/${product.id}`}
            className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"
          >
            Edit
          </Link>
          <button
            onClick={() => confirmAndDelete(product.id)}
            className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
