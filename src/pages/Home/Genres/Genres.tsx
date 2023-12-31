import { useNavigate } from "react-router-dom";

// @ts-ignore
import gen1 from "../../../images/gen1.png";
// @ts-ignore
import gen2 from "../../../images/gen2.png";
// @ts-ignore
import gen3 from "../../../images/gen3.png";
// @ts-ignore
import gen4 from "../../../images/gen4.png";
// @ts-ignore
import gen5 from "../../../images/gen5.png";
// @ts-ignore
import gen6 from "../../../images/gen6.png";

const Genres: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="genres">
      <div className="container">
        <div className="genres">
          <div className="genres__title">
            <h1>Genres</h1>
            <p onClick={() => navigate("/allBooks")}>View all</p>
          </div>
          <div className="genres__carts">
            <div className="genres__carts__cart">
              <img src={gen1} alt="gen1" />
              <p>Sci-Fi</p>
            </div>
            <div className="genres__carts__cart">
              <img src={gen2} alt="gen2" />
              <p>For kids</p>
            </div>
            <div className="genres__carts__cart">
              <img src={gen3} alt="gen3" />
              <p>Psychology</p>
            </div>
            <div className="genres__carts__cart">
              <img src={gen4} alt="gen4" />
              <p>Romantic</p>
            </div>
            <div className="genres__carts__cart">
              <img src={gen5} alt="gen5" />
              <p>Detective</p>
            </div>
            <div className="genres__carts__cart">
              <img src={gen6} alt="gen6" />
              <p>Finance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genres;
