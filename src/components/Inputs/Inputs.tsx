import React, { ChangeEvent, useState } from "react";
import {
  useProductContext,
  ProductContextValue,
} from "../../context/ProductContext";
import axios from "axios";
import { API } from "../../Api";

interface myObj {
  name: string;
  by: string;
  price: any;
  genres: string;
}

interface Product {
  name: string;
  by: string;
  price: any;
  genres: string;
}

const init: myObj = {
  name: "",
  by: "",
  price: "",
  genres: "",
};

const Inputs: React.FC = () => {
  const [product, setProduct] = useState(init);

  // const { createProduct } = useProductContext();

  function handleInp(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "price") {
      let obj: myObj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  async function createProduct(newProduct: Product) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log("createError");
    }
  }

  return (
    <div className="form">
      <label>Product name</label>
      <input onChange={handleInp} name="name" type="text" />

      <label>Product by</label>
      <input onChange={handleInp} name="by" type="text" />

      <label>Product price</label>
      <input onChange={handleInp} name="by" type="number" />

      <label>Product genres</label>
      <select name="genres">
        <option>Autographed Books</option>
        <option>Sci-Fi</option>
        <option>For kids</option>
        <option>For teenagers</option>
        <option>Finance</option>
        <option>Detective</option>
        <option>Romantic</option>
        <option>Psychology</option>
        <option>Self-Improvement</option>
        <option>Educational</option>
        <option>Literature</option>
        <option>Religion</option>
      </select>

      <button
        onClick={() => {
          createProduct(product);
          setProduct(init)
        }}>
        Create
      </button>
    </div>
  );
};

export default Inputs;
