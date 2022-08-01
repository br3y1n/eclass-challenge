import { Character } from "../../../models";

interface UseDetailsStateResponse {
  loading: boolean;
  character?: Character;
  characterMapped: [string, string][];
}

type UseDetailsState = () => UseDetailsStateResponse;

export type { UseDetailsStateResponse, UseDetailsState };
