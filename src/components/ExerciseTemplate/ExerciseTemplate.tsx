import { FC } from "react";
import { Link, Typography } from "@mui/material";
import { ExerciseTemplateProps } from "./models";
import { exerciseTemplateStyles } from "./ExerciseTemplate.styles";

const ExerciseTemplate: FC<ExerciseTemplateProps> = ({
  url,
  title,
  description,
  implementation,
}) => (
  <>
    <Typography variant={"h3"} sx={exerciseTemplateStyles.title}>
      {title}
    </Typography>
    <Typography variant={"body1"} sx={exerciseTemplateStyles.padding}>
      {description}
    </Typography>

    {implementation}

    <Typography variant={"body1"} sx={exerciseTemplateStyles.padding}>
      You can see the solution{" "}
      <Link href={url} target={"_blank"}>
        here
      </Link>
      .
    </Typography>
  </>
);

export default ExerciseTemplate;
