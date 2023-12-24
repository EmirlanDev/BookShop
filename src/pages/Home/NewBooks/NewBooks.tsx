import { useNavigate } from "react-router-dom";
import {
  ProductContextInterfase,
  useProductContext,
} from "../../../context/ProductContext";

const NewBooks = () => {
  const { product }: ProductContextInterfase | any = useProductContext();

  const newArr = product.slice(-3, product.length);
  const navigate = useNavigate();

  return (
    <section id="newBooks">
      <div className="container">
        <div className="newBooks">
          <h1>New Books</h1>
          <div className="newBooks__carts">
            {newArr
              ? newArr.map((el: any) => (
                  <div className="newBooks__carts__cart">
                    <div
                      onClick={() => {
                        navigate(`/detail/${el.id}`);
                      }}
                      className="newBooks__carts__cart__img">
                      <img src={el.image} alt="" />
                    </div>
                    <h2
                      onClick={() => {
                        navigate(`/detail/${el.id}`);
                      }}>
                      {el.title}
                    </h2>
                    <p
                      style={{ display: el.by ? "" : "none" }}
                      onClick={() => {
                        navigate(`/detail/${el.id}`);
                      }}>
                      by {el.by}
                    </p>
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
