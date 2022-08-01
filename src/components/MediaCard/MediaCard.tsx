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
import { useMediaCardState } from "./hooks/useMediaCardState";

const MediaCard: FC<Character> = (props) => {
  const { image, name, id } = props;
  const { toggleFavorite, icon } = useMediaCardState(props);

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
              {icon}
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
