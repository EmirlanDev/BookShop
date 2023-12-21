import { actionType, MyAction } from "../actionType";

interface MyProduct {
  id: number;
  name: string;
  by: string;
  price: string | number;
  genres: string;
  image: string;
}

interface MyState {
  product: MyProduct[];
}

const initialState: MyState = {
  product: [],
};

export const MainReducer = (
  state: MyState = initialState,
  action: MyAction
): MyState => {
  switch (action.type) {
    case actionType.ADD_PRODUCT:
      return { ...state, product: action.payload.data };
    default:
      return state;
  }
};
