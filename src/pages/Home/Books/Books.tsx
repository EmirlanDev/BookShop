import axios from "axios";
import { useSelector } from "react-redux";
import { actionType } from "../../../redux/actionType";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { API } from "./../../../Api";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { deleteProduct } from "../../../helpers/help";

const Books = () => {
  const { product } = useSelector((s: RootState) => s);
  const dispatch = useDispatch();

  async function getProduct() {
    try {
      let res = await axios(API);
      dispatch({ type: actionType.ADD_PRODUCT, payload: res });
    } catch (error) {
      console.log("getError");
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section id="books">
      <div className="container">
        <div className="books">
          <div className="books__title">
            <h1>Books</h1>
            <p>View all</p>
          </div>
        </div>
      </div>
      <div className="carts">
        {product
          ? product.map((el) => (
              <div className="carts__cart">
                <div className="carts__cart__img">
                  <img src={el.image} alt="Product Image" />
                </div>
                <h1>{el.title}</h1>
                <p>{el.by}</p>
                <div className="carts__cart__btns">
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
