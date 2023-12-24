import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import axios from "axios";
import { API } from "../../../Api";
import { actionType } from "../../../redux/actionType";
import { useNavigate } from "react-router-dom";

const NewBooks = () => {
  const { product } = useSelector((s: RootState) => s);
  const newArr = product.slice(-3, product.length);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  async function getOneProduct(id: number) {
    try {
      let res = await axios(`${API}/${id}`);
      dispatch({ type: actionType.GET_ONE_PRODUCT, payload: res });
    } catch (error) {
      console.log("getOneProductError");
    }
  }

  return (
    <section id="newBooks">
      <div className="container">
        <div className="newBooks">
          <h1>New Books</h1>
          <div className="newBooks__carts">
            {newArr
              ? newArr.map((el) => (
                  <div
                    onClick={() => {
                      getOneProduct(el.id);
                      navigate(`/detail/${el.id}`);
                    }}
                    className="newBooks__carts__cart">
                    <div className="newBooks__carts__cart__img">
                      <img src={el.image} alt="" />
                    </div>
                    <h2>{el.title}</h2>
                    <p>by {el.by}</p>
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
