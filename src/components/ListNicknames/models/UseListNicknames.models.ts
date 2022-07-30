import { ListNicknamesProps } from "./ListNicknames.models";

interface UseListNicknamesStateResponse {
  orderedNames: string[];
}

type UseListNicknamesState = (
  props: ListNicknamesProps
) => UseListNicknamesStateResponse;

export type { UseListNicknamesState };
