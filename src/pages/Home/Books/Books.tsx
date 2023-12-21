import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Books = () => {
  const { product } = useSelector((s: RootState) => s);
  return (
    <section id="books">
      <div className="container">
        <div className="books">
          <div className="books__title">
            <h1>Books</h1>
            <p>View all</p>
          </div>
          <div className="books__carts">
            <div className="books__carts__cart"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
