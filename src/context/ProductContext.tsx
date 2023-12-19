import axios from "axios";
import React, { ReactNode, createContext, useContext } from "react";
import { API } from "../Api";

console.log(API);

export interface ProductContextValue {
  createProduct: (newProduct: Product) => Promise<void>;
}

interface Product {
  name: string;
  by: string;
  price: any;
  genres: string;
}

const productContext = createContext<ProductContextValue | undefined>(
  undefined
);

export const useProductContext = () => useContext(productContext);

const ProductContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  async function createProduct(newProduct: Product) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log("createError");
    }
  }

  let values: ProductContextValue = {
    createProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
