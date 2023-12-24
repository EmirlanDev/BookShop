import axios from "axios";
import { ReactNode, createContext, useContext, useReducer } from "react";
import { API } from "../Api";
import { useParams } from "react-router-dom";

//! reducer

const ADD_PRODUCT = "ADD_PRODUCT";
const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";

type myProduct = {
  image: string;
  title: string;
  by: string;
  price: any;
  genres: string;
  description: string;
};

interface myINIT_STATE {
  product: myProduct[];
  oneProduct: myProduct | null;
}

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: any;
}

interface GetOneProductAction {
  type: typeof GET_ONE_PRODUCT;
  payload: any;
}

export type MyAction = AddProductAction | GetOneProductAction;

const INIT_STATE: myINIT_STATE = {
  product: [],
  oneProduct: null,
};

const reducer = (state = INIT_STATE, action: MyAction): typeof INIT_STATE => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, product: action.payload.data };
    case GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload.data };
    default:
      return state;
  }
};

//! context
export interface ProductContextInterfase {
  getOneProduct?: (id: number) => void;
  deleteProduct?: (id: number) => void;
  getProduct: any;
  product: myProduct[];
  oneProduct: myProduct | null;
}

const productContext = createContext<ProductContextInterfase | any>({});

export const useProductContext = () => {
  const context = useContext(productContext);

  if (!context) {
    throw new Error(
      "useProductContext must be used within a ProductContextProvider"
    );
  }

  return context;
};

type ProductContextProviderProps = {
  children: ReactNode;
};

const ProductContext: React.FC<ProductContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // const { id } = useParams();

  async function getProduct() {
    try {
      let res = await axios(API);
      dispatch({ type: ADD_PRODUCT, payload: res });
    } catch (error) {
      console.log("getError");
    }
  }

  async function deleteProduct(id: number) {
    try {
      await axios.delete(`${API}/${id}`);
    } catch (error) {
      console.log("deleteError");
    }
  }

  async function getOneProduct(id: number) {
    try {
      let res = await axios(`${API}/${id}`);
      dispatch({ type: GET_ONE_PRODUCT, payload: res });
    } catch (error) {
      console.log("getOneProductError");
    }
  }

  const values: ProductContextInterfase = {
    getOneProduct,
    getProduct,
    deleteProduct,
    product: state.product,
    oneProduct: state.oneProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
