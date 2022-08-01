import { Character } from "../../../models";
import { ReactElement } from "react";

interface UseMediaCardStateResponse {
  toggleFavorite: () => void;
  icon: ReactElement;
}

type UseMediaCardState = (props: Character) => UseMediaCardStateResponse;

export type { UseMediaCardState, UseMediaCardStateResponse };
