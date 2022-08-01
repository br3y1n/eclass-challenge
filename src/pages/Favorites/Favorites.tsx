import MediaCards from "../../components/MediaCards/MediaCards";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../store/selectors/selectors";
import { Typography } from "@mui/material";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <Typography variant={"h1"}>Favorites</Typography>
      <MediaCards cards={favorites} />
    </>
  );
};

export default Favorites;
