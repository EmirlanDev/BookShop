import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const NewBooks = () => {
  const { product } = useSelector((s: RootState) => s);
  const newArr = product.slice(-3, product.length);

  return (
    <section id="newBooks">
      <div className="container">
        <div className="newBooks">
          <h1>New Books</h1>
          <div className="newBooks__carts">
            {newArr
              ? newArr.map((el) => (
                  <div className="newBooks__carts__cart">
                    <div className="newBooks__carts__cart__img">
                      <img src={el.image} alt="" />
                    </div>
                    <h2>{el.title}</h2>
                    <p>{el.by}</p>
                  </div>
                ))
              : "loading..."}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBooks;
