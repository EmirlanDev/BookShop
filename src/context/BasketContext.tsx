import { createContext, useContext, useReducer } from "react";
import {
  ProductContextProviderProps,
  useProductContext,
} from "./ProductContext";

//!redux

const BASKET_CART = "BASKET_CART";

interface INIT_STATE_interface {
  basket: any;
}

interface addBasket {
  type: typeof BASKET_CART;
  payload: any;
}

const INIT_STATE: INIT_STATE_interface = {
  basket: [],
};

const reducer = (state = INIT_STATE, action: addBasket) => {
  switch (action.type) {
    case BASKET_CART:
      return { ...state, basket: action.payload };
    default:
      return state;
  }
};

//!context

export interface BasketContextInterface {
  addToCart: (count: number) => void;
  getToCart: any;
}

const basketContext = createContext({});
export const useBasketContext = () => useContext(basketContext);

const BasketContext: React.FC<ProductContextProviderProps> = ({ children }) => {
  const { oneProduct }: BasketContextInterface | any = useProductContext();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addToCart(count: number) {
    const storage = localStorage.getItem("book");
    let data = [];

    if (storage !== null) {
      try {
        data = JSON.parse(storage);
      } catch (error) {
        console.log("StorageBookError");
      }
    }
    oneProduct.count = count;
    data.push(oneProduct);
    localStorage.setItem("book", JSON.stringify(data));
  }

  function getToCart() {
    const storage = localStorage.getItem("book");
    let data = [];

    if (storage !== null) {
      try {
        data = JSON.parse(storage);
      } catch (error) {
        console.log("StorageBookError");
      }
    }
    dispatch({ type: BASKET_CART, payload: data });
  }

  const values = {
    addToCart,
    getToCart,
    basket: state.basket,
  };
  return (
    <basketContext.Provider value={values}>{children}</basketContext.Provider>
  );
};

export default BasketContext;
