import { ChangeEvent } from "react";
import { Character } from "../../../models";

interface UseCharactersStateResponse {
  name: string;
  loading: boolean;
  cards?: Character[];
  isMobile: boolean;
  page: number;
  pages?: number;
  handleChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangePagination: (event: ChangeEvent<unknown>, page: number) => void;
}

type UseCharactersState = () => UseCharactersStateResponse;

export type { UseCharactersState, UseCharactersStateResponse };
