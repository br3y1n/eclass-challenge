import { OrderEnum } from "../enums";
import { SortCallback } from "../models";

const SORT_REF_BY: Record<OrderEnum, SortCallback> = {
  [OrderEnum.ASC]: (stringA, stringB) => stringA.localeCompare(stringB),
  [OrderEnum.DSC]: (stringA, stringB) => stringB.localeCompare(stringA),
};

export { SORT_REF_BY };
