import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useForm } from "react-hook-form";
import * as productApi from "../products";
import { enqueueSnackbar } from "notistack";

const EditPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm({});

  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const response = await productApi.getProduct(id);
      setProduct(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const updateProduct = async (e) => {
    setIsLoading(true);
    try {
      await productApi.updateProduct(id, product);
      enqueueSnackbar(`Product #${id} updated`, {
        variant: "success",
      });
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    if (product) {
      reset(product);
    }
  }, [product]);

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Update a Product
      </h2>
      <ProductForm
        control={control}
        isLoading={isLoading}
        onSubmit={handleSubmit(updateProduct)}
        product={product}
        setProduct={setProduct}
      />
    </div>
  );
};

export default EditPage;
