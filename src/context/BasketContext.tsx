import { createContext, useContext, useReducer } from "react";
import {
  ProductContextProviderProps,
  useProductContext,
} from "./ProductContext";

interface myObj {
  image: string;
  title: string;
  by: string;
  price: any;
  genres: string;
  description: string;
  id: number;
}

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
  checkToCart: boolean;
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

  function checkToCart(id: number) {
    const storage = localStorage.getItem("book");
    let data = [];

    if (storage !== null) {
      try {
        data = JSON.parse(storage);
      } catch (error) {
        console.log("StorageBookError");
      }
    }

    if (data) {
      let cart = data.find((el: myObj) => el.id === id);
      return cart ? true : false;
    }
  }

  function removeToCart(id: number) {
    const storage = localStorage.getItem("book");
    let data = [];

    if (storage !== null) {
      try {
        data = JSON.parse(storage);
      } catch (error) {
        console.log("StorageBookError");
      }
    }

    data = data.filter((el: myObj) => el.id !== id);
    localStorage.setItem("book", JSON.stringify(data));
    getToCart()
  }

  const values = {
    addToCart,
    getToCart,
    checkToCart,
    removeToCart,
    basket: state.basket,
  };
  return (
    <basketContext.Provider value={values}>{children}</basketContext.Provider>
  );
};

export default BasketContext;
