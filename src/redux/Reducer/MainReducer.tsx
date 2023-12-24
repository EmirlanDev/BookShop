import { actionType, MyAction } from "../actionType";

interface MyProduct {
  id: number;
  title: string;
  by: string;
  price: string | number;
  genres: string;
  image: string;
  description: string;
}

interface MyState {
  product: MyProduct[];
  oneProduct: MyProduct[];
}

const initialState: MyState = {
  product: [],
  oneProduct: [],
};

export const MainReducer = (
  state: MyState = initialState,
  action: MyAction
): MyState => {
  switch (action.type) {
    case actionType.ADD_PRODUCT:
      return { ...state, product: action.payload.data };
    case actionType.GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};
