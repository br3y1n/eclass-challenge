import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Character } from "../../models";
import { Link } from "react-router-dom";
import { RoutesEnum } from "../../enums";
import { mediaCardStyles } from "./MediaCard.styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../store/selectors/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/actions/actions";

const MediaCard: FC<Character> = (props) => {
  const { image, name, id } = props;
  const favorites = useSelector(selectFavorites);
  const isFavorite =
    favorites.find(({ id: currentId }) => id === currentId) !== undefined;
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(isFavorite ? removeFromFavorites(props) : addToFavorites(props));
  };

  return (
    <Card sx={mediaCardStyles.container}>
      <Box sx={mediaCardStyles.subContainer}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={mediaCardStyles.img}
        />

        <Box sx={mediaCardStyles.description}>
          <CardContent>
            <Typography gutterBottom variant="body2" sx={mediaCardStyles.text}>
              {name}
            </Typography>
          </CardContent>

          <CardActions>
            <IconButton sx={mediaCardStyles.button} onClick={toggleFavorite}>
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>

            <Button
              component={Link}
              to={`${RoutesEnum.DETAILS}/${id}`}
              sx={mediaCardStyles.button}
            >
              See more...
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default MediaCard;
