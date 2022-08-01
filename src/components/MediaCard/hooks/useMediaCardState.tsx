import { UseMediaCardState } from "../models";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../../store/selectors/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../store/actions/actions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const useMediaCardState: UseMediaCardState = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite =
    favorites.find(({ id: currentId }) => id === currentId) !== undefined;
  const icon = isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />;

  const toggleFavorite = () => {
    dispatch(isFavorite ? removeFromFavorites(props) : addToFavorites(props));
  };

  return {
    toggleFavorite,
    icon,
  };
};

export { useMediaCardState };
