import { Character } from "../../../models";

interface CharactersResponse {
  characters: {
    results: Character[];
    info: {
      pages: number;
    };
  };
}

export type { CharactersResponse };
