import { SORT_REF_BY } from "../../../constants";
import { UseListNicknamesState } from "../models";

const useListNicknamesState: UseListNicknamesState = ({ order, names }) => {
  const sortRef = SORT_REF_BY[order];
  const orderedNames = [...names].sort(sortRef);

  return { orderedNames };
};

export { useListNicknamesState };
