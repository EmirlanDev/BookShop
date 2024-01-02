import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProductContextInterfase,
  useProductContext,
} from "./../../context/ProductContext";

interface myObj {
  image: string;
  title: string;
  by: string;
  price: any;
  genres: string;
  description: string;
}

const init: myObj = {
  image: "",
  title: "",
  by: "",
  price: "",
  genres: "",
  description: "",
};

const Inputs: React.FC = () => {
  const [product, setProduct] = useState(init);
  const { createProduct }: ProductContextInterfase | any = useProductContext();
  const navigate = useNavigate();

  function handleInp(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
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

  return (
    <div className="form">
      <label>Product name</label>
      <input
        onChange={handleInp}
        value={product.title}
        name="title"
        type="text"
      />

      <label>Product by</label>
      <input onChange={handleInp} value={product.by} name="by" type="text" />

      <label>Product price</label>
      <input
        onChange={handleInp}
        value={product.price}
        name="price"
        type="number"
      />

      <label>Product image</label>
      <input
        onChange={handleInp}
        value={product.image}
        name="image"
        type="text"
      />

      <label>Product Description</label>
      <input
        onChange={handleInp}
        value={product.description}
        name="description"
        type="text"
      />

      <label>Product genres</label>
      <select onChange={(e) => handleInp(e)} name="genres">
        <option value={"Sci-Fi"}>Sci-Fi</option>
        <option value={"For kids"}>For kids</option>
        <option value={"For teenagers"}>For teenagers</option>
        <option value={"Finance"}>Finance</option>
        <option value={"Detective"}>Detective</option>
        <option value={"Romantic"}>Romantic</option>
        <option value={"Psychology"}>Psychology</option>
        <option value={"Self-Improvement"}>Self-Improvement</option>
        <option value={"Educational"}>Educational</option>
        <option value={"Literature"}>Literature</option>
        <option value={"Religion"}>Religion</option>
      </select>

      <button
        onClick={() => {
          createProduct(product);
          setProduct(init);
          navigate("/");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default Inputs;
