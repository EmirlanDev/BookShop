import { useEffect } from "react";
import {
  ProductContextInterfase,
  useProductContext,
} from "../../../context/ProductContext";

const Book = () => {
  const { getProduct, deleteProduct, product }: ProductContextInterfase | any =
    useProductContext();

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);

  return (
    <div className="all__book">
      <select>
        <option>Popular</option>
        <option>Interesting</option>
        <option></option>
        <option></option>
        <option></option>
      </select>
      <div className="all__book__carts">
        {product
          ? product.map((el: any) => (
              <div className="all__book__carts__cart">
                <img src={el.image} alt="cart image" />
                <h2>{el.title}</h2>
                <p>by {el.by}</p>
              </div>
            ))
          : "loading..."}
      </div>
    </div>
  );
};

export default Book;
