import MediaCards from "../../components/MediaCards/MediaCards";
import Loading from "../../components/Loading/Loading";
import { Pagination, TextField, Typography } from "@mui/material";
import { charactersStyles } from "./Characters.styles";
import { useCharactersState } from "./hooks/useCharactersState";

const Characters = () => {
  const {
    name,
    loading,
    cards,
    isMobile,
    page,
    pages,
    handleChangeInput,
    handleChangePagination,
  } = useCharactersState();

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
        <Loading />
      ) : (
        <>
          <MediaCards cards={cards!} />

          {cards!.length > 0 && (
            <Pagination
              sx={charactersStyles.pagination}
              size={isMobile ? "small" : undefined}
              siblingCount={isMobile ? 0 : undefined}
              variant="outlined"
              page={page}
              count={pages}
              color="secondary"
              onChange={handleChangePagination}
            />
          )}
        </>
      )}
    </>
  );
};

export default Characters;
