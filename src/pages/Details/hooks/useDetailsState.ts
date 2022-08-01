import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CHARACTER_QUERY } from "../constants";
import { OmitKeysEnum } from "../enums";
import { CharacterResponse, UseDetailsState } from "../models";

const useDetailsState: UseDetailsState = () => {
  const { id } = useParams();

  const { data, loading } = useQuery<CharacterResponse>(CHARACTER_QUERY, {
    variables: { id },
  });

  const character = data?.character;
  const characterMapped: [string, string][] = Object.entries(
    character ?? {}
  ).filter(
    ([key]) => !Object.values(OmitKeysEnum).includes(key as OmitKeysEnum)
  );

  return {
    loading,
    character,
    characterMapped,
  };
};

export { useDetailsState };
