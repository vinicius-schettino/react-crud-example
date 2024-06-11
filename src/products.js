import axios from "axios";
import { VITE_BACKEND_URL } from "./App";

export function isProductValid(product) {
  let errorMessages = {};
  let error = false;
  for (const key in product) {
    if (product[key] === "") {
      errorMessages[key] = `${key} is required`;
      error = true;
    }
  }
  return errorMessages;
}

export async function createProduct(product) {
  return await axios.post(`${VITE_BACKEND_URL}/products`, {
    name: product.name,
    quantity: product.quantity,
    price: product.price,
    image: product.image,
  });
}
