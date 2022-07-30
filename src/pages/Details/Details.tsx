import { useParams } from "react-router-dom";
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import { charactersStyles } from "../Characters/Characters.styles";
import { Character } from "../../models";
import { OmitKeysEnum } from "./enums";
import { detailsStyles } from "./Details.styles";

const CHARACTER_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      image
      name
      species
      gender
      created
      status
    }
  }
`;

const Img = styled("img")();

const Details = () => {
  const { id } = useParams();

  const { data, loading } = useQuery<{ character: Character }>(
    CHARACTER_QUERY,
    {
      variables: { id },
    }
  );

  const character = data?.character;
  const characterMapped = Object.entries(character ?? {}).filter(
    ([key]) => !Object.values(OmitKeysEnum).includes(key as OmitKeysEnum)
  );

  return (
    <>
      <Typography variant={"h1"}>Details</Typography>

      {loading ? (
        <Typography variant={"body1"} sx={charactersStyles.pagination}>
          Loading...
        </Typography>
      ) : (
        <>
          <Img src={character!.image} sx={detailsStyles.img} />

          <Table sx={detailsStyles.table}>
            <TableBody>
              {characterMapped.map(([key, value], index) => (
                <TableRow key={index}>
                  <TableCell sx={detailsStyles.key}>{key}</TableCell>
                  <TableCell sx={detailsStyles.value}>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
};

export default Details;
