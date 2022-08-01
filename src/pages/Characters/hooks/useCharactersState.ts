import { ChangeEvent, useState } from "react";
import { useAppState } from "../../../hooks/useAppState";
import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "../constants";
import { CharactersResponse, UseCharactersState } from "../models";

const useCharactersState: UseCharactersState = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const { isMobile } = useAppState();

  const { data, loading } = useQuery<CharactersResponse>(CHARACTERS_QUERY, {
    variables: { page, name },
  });

  const cards = data?.characters.results;
  const pages = data?.characters.info.pages;

  const handleChangePagination = (_: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const handleChangeInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  return {
    name,
    loading,
    cards,
    isMobile,
    page,
    pages,
    handleChangeInput,
    handleChangePagination,
  };
};

export { useCharactersState };
