import { TextFieldElement } from "react-hook-form-mui";
import { LinearProgress } from "@mui/material";
const ProductForm = ({ product, setProduct, onSubmit, control, isLoading }) => {
  return (
    <form onSubmit={onSubmit} noValidate>
      {!isLoading ? (
        <div className="space-y-2">
          <label aria-label="name">Name</label>
          <TextFieldElement
            required
            fullWidth
            id="name"
            label="Product Name"
            value={product.name}
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
            name="name"
            autoComplete="name"
            autoFocus
            control={control}
          />
          <label aria-label="quantity">Quantity</label>
          <TextFieldElement
            required
            fullWidth
            id="quantity"
            label="Available Quantity"
            name="quantity"
            control={control}
            type="number"
            value={product}
            onChange={(e) => {
              setProduct({ ...product, quantity: e.target.value });
            }}
          />
          <label aria-label="price">Price</label>

          <TextFieldElement
            required
            fullWidth
            id="price"
            label="Listing Price"
            name="price"
            control={control}
            type="number"
            value={product.price}
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}
          />
          <label aria-label="image">Image URL</label>
          <label>Image URL</label>
          <TextFieldElement
            required
            fullWidth
            id="image"
            label="Image URL"
            name="image"
            control={control}
            value={product.image}
            onChange={(e) => {
              setProduct({ ...product, image: e.target.value });
            }}
          />
          <div>
            <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
              Save
            </button>
          </div>
        </div>
      ) : (
        <LinearProgress />
      )}
    </form>
  );
};

export default ProductForm;
