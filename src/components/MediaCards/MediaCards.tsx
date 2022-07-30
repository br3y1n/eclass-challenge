import { Character } from "../../models";
import MediaCard from "../MediaCard/MediaCard";
import { Box } from "@mui/material";
import { FC } from "react";
import { mediaCardsStyles } from "./MediaCards.styles";

const MediaCards: FC<{ cards: Character[] }> = ({ cards }) => {
  return (
    <Box sx={mediaCardsStyles.container}>
      {cards.map((props: Character) => (
        <MediaCard {...props} />
      ))}
    </Box>
  );
};

export default MediaCards;
