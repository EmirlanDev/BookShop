import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  ProductContextInterfase,
  useProductContext,
} from "../../../context/ProductContext";

const Books = () => {
  const navigate = useNavigate();

  const { getProduct, deleteProduct, product }: ProductContextInterfase | any =
    useProductContext();

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section id="books">
      <div className="container">
        <div className="books">
          <div className="books__title">
            <h1>Books</h1>
            <p onClick={() => navigate("/allBooks")}>View all</p>
          </div>
        </div>
      </div>
      <div className="carts">
        {product
          ? product.map((el: any) => (
              <div className="carts__cart">
                <div className="carts__cart__img">
                  <img
                    onClick={() => {
                      navigate(`/detail/${el.id}`);
                    }}
                    src={el.image}
                    alt="Product Image"
                  />
                </div>
                <h1
                  onClick={() => {
                    navigate(`/detail/${el.id}`);
                  }}>
                  {el.title}
                </h1>
                <p
                  style={{ display: el.by ? "" : "none" }}
                  onClick={() => {
                    navigate(`/detail/${el.id}`);
                  }}>
                  by {el.by}
                </p>
                <div className="carts__cart__btns n">
                  <button onClick={() => deleteProduct(el.id)}>
                    <MdDelete />
                  </button>
                  <button>
                    <RiEditFill />
                  </button>
                </div>
              </div>
            ))
          : "loading..."}
      </div>
    </section>
  );
};

export default Books;
