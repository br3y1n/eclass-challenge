import { Character } from "../../models";
import MediaCard from "../MediaCard/MediaCard";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { mediaCardsStyles } from "./MediaCards.styles";

const MediaCards: FC<{ cards: Character[] }> = ({ cards }) => {
  const hasCards = cards.length > 0;

  return (
    <Box sx={mediaCardsStyles.container}>
      {hasCards ? (
        cards.map((props: Character, index) => (
          <MediaCard key={index} {...props} />
        ))
      ) : (
        <Typography variant={"body1"} sx={mediaCardsStyles.notFound}>
          No matches found...
        </Typography>
      )}
    </Box>
  );
};

export default MediaCards;
