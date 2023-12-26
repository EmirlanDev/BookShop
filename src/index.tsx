import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import BasketContext from "./context/BasketContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ProductContext>
      <BasketContext>
        <App />
      </BasketContext>
    </ProductContext>
  </BrowserRouter>
);
