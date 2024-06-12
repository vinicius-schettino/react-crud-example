import axios from "axios";
import { VITE_BACKEND_URL } from "./App";

export async function createProduct(product) {
  return await axios.post(`${VITE_BACKEND_URL}/products`, product);
}

export async function updateProduct(id, product) {
  return await axios.put(`${VITE_BACKEND_URL}/products/${id}`, product);
}

export async function deleteProduct(id) {
  return await axios.delete(`${VITE_BACKEND_URL}/products/${id}`);
}

export async function getProducts() {
  return await axios.get(`${VITE_BACKEND_URL}/products`);
}

export async function getProduct(id) {
  return await axios.get(`${VITE_BACKEND_URL}/products/${id}`);
}
