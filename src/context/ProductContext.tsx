import { ReactNode, useContext, createContext } from "react";
import { API } from "./../Api";
import { actionType } from "../redux/actionType";
import { useDispatch } from "react-redux";
import axios from "axios";

export type ProductContextType = {
  getOneProduct: (id: number) => Promise<void> | undefined;
};

const productContext = createContext<ProductContextType | undefined>(undefined);
export const useProductContext = () => useContext(productContext);

type ProductContextProviderProps = {
  children: ReactNode;
};

const ProductContext: React.FC<ProductContextProviderProps> = ({
  children,
}) => {
  const dispatch = useDispatch();

  async function getOneProduct(id: number): Promise<void> {
    try {
      let res = await axios(`${API}/${id}`);
      dispatch({ type: actionType.GET_ONE_PRODUCT, payload: res });
    } catch (error) {
      console.log("getOneProductError");
    }
  }

  let values: ProductContextType = {
    getOneProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
