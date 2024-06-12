import axios from "axios";
import { VITE_BACKEND_URL } from "./App";

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function createProduct(product) {
  await wait(500);
  return await axios.post(`${VITE_BACKEND_URL}/products`, product);
}

export async function updateProduct(id, product) {
  await wait(500);
  return await axios.put(`${VITE_BACKEND_URL}/products/${id}`, product);
}

export async function deleteProduct(id) {
  await wait(1500);
  return await axios.delete(`${VITE_BACKEND_URL}/products/${id}`);
}

export async function getProducts() {
  await wait(1500);
  return await axios.get(`${VITE_BACKEND_URL}/products`);
}

export async function getProduct(id) {
  await wait(500);
  return await axios.get(`${VITE_BACKEND_URL}/products/${id}`);
}
