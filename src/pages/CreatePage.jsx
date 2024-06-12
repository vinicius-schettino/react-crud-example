import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createProduct } from "../products";

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
      toast.success(`Save ${response.data.name} sucessfully`);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
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
