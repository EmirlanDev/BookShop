export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";

export interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: any;
}

export interface GetOneProductAction {
  type: typeof GET_ONE_PRODUCT;
  payload: any;
}

export type MyAction = AddProductAction | GetOneProductAction;

export const actionType = {
  ADD_PRODUCT,
  GET_ONE_PRODUCT,
} as const;
