import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { Pagination, Typography } from "@mui/material";
import { charactersStyles } from "./Characters.styles";
import MediaCards from "../../components/MediaCards/MediaCards";

const FILMS_QUERY = gql`
  query Characters($page: Int) {
    characters(page: $page) {
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

  const { data, loading, error } = useQuery(FILMS_QUERY, {
    variables: { page },
  });

  const handleChange = (_: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <div>
      <Typography variant={"h1"}>Characters</Typography>

      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <MediaCards cards={data.characters.results} />

          <Pagination
            sx={charactersStyles.pagination}
            variant="outlined"
            page={page}
            count={data.characters.info.pages}
            color="secondary"
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};

export default Characters;
