import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../products";
import { enqueueSnackbar } from "notistack";
import ProductForm from "../components/ProductForm";
import { useForm } from "react-hook-form";

const CreatePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({});
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });
  const saveProduct = async (e) => {
    console.log(e);
    try {
      setIsLoading(true);
      let response = await createProduct(product);
      enqueueSnackbar(`Product #${response.data.id} created`, {
        variant: "success",
      });
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Create a Product
      </h2>
      <ProductForm
        control={control}
        isLoading={isLoading}
        onSubmit={handleSubmit(saveProduct)}
        product={product}
        setProduct={setProduct}
      />
    </div>
  );
};

export default CreatePage;
