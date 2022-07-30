import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { Pagination, TextField, Typography } from "@mui/material";
import { charactersStyles } from "./Characters.styles";
import MediaCards from "../../components/MediaCards/MediaCards";

const CHARACTERS_QUERY = gql`
  query Characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages
      }
      results {
        name
        image
        id
      }
    }
  }
`;

const Characters = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  const { data, loading } = useQuery(CHARACTERS_QUERY, {
    variables: { page, name },
  });

  const cards = data?.characters?.results;

  const handleChange = (_: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const handleChangeInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  return (
    <>
      <Typography variant={"h1"}>Characters</Typography>

      <TextField
        variant="outlined"
        label="name"
        placeholder="Filter by name"
        value={name}
        onChange={handleChangeInput}
      />

      {loading ? (
        <Typography variant={"body1"} sx={charactersStyles.pagination}>
          Loading...
        </Typography>
      ) : (
        <>
          <MediaCards cards={cards} />

          {cards.length > 0 && (
            <Pagination
              sx={charactersStyles.pagination}
              variant="outlined"
              page={page}
              count={data.characters.info.pages}
              color="secondary"
              onChange={handleChange}
            />
          )}
        </>
      )}
    </>
  );
};

export default Characters;
