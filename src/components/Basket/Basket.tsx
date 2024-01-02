import { useNavigate } from "react-router-dom";
import { useBasketContext } from "../../context/BasketContext";
import { BasketContextInterface } from "./../../context/BasketContext";
import { useEffect } from "react";

const Basket = () => {
  const { basket, getToCart, removeToCart }: BasketContextInterface | any =
    useBasketContext();
  const navigate = useNavigate();

  useEffect(() => {
    getToCart();
  }, []);

  interface myObj {
    image: string;
    title: string;
    by: string;
    price: any;
    genres: string;
    description: string;
    id: number;
    count: number;
  }

  return (
    <section id="basket">
      <div className="container">
        <h1 className="bt">Your cart</h1>
        <h2 className="bp">
          Not ready to checkout?{" "}
          <span onClick={() => navigate("/allBooks")}>Continue Shopping</span>
        </h2>
        <div className="basket">
          <div className="basket__carts">
            {basket
              ? basket.map((el: myObj) => (
                  <div className="basket__carts__cart">
                    <img src={el.image} alt="" />
                    <div className="basket__carts__cart__text">
                      <div>
                        <h3>{el.title}</h3>
                        <h4>by {el.by}</h4>
                      </div>
                      <div>
                        <h5>Quantity: {el.count}</h5>
                        <h6>${el.price}</h6>
                      </div>
                    </div>
                    <p onClick={() => removeToCart(el.id)}>Remove</p>
                  </div>
                ))
              : "loading..."}
          </div>
          <div className="basket__pay"></div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
