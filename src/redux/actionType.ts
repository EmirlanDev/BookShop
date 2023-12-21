export const ADD_PRODUCT = "ADD_PRODUCT";

export interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: any;
}

export type MyAction = AddProductAction;

export const actionType = {
  ADD_PRODUCT,
} as const;
